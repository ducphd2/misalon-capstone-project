import { EBullEvent, EBullQueue, generateUniqueSku } from '@libs/core';
import { OnQueueActive, OnQueueCompleted, OnQueueFailed, Process, Processor } from '@nestjs/bull';
import { Logger, OnModuleInit } from '@nestjs/common';
import { Job } from 'bull';
import { BranchUserRepository, MerchantRepository, ServiceRepository, UserRepository } from '@libs/database';
import { EUserRole } from '@libs/grpc-types/protos/commons';
import { EServiceType } from '@libs/grpc-types/protos/merchant_common';

import { UserService } from './user.service';

@Processor(EBullQueue.USER_QUEUE)
export class UserProcessor implements OnModuleInit {
  private readonly logger = new Logger(this.constructor.name);

  constructor(
    private readonly userService: UserService,
    private readonly branchUserRepository: BranchUserRepository,
    private readonly userRepository: UserRepository,
    private readonly serviceRepository: ServiceRepository,
    private readonly merchantRepository: MerchantRepository,
  ) {}

  onModuleInit() {
    this.logger.log('user processor init');
  }

  @OnQueueActive()
  onActive(job: Job) {
    this.logger.log(`Processing job ${job.id} of type ${job.name}. Data: ${JSON.stringify(job.data)}`);
  }

  @OnQueueCompleted()
  onComplete(job: Job, result: any) {
    this.logger.log(`Completed job ${job.id} of type ${job.name}. Result: ${JSON.stringify(result)}`);
  }

  @OnQueueFailed()
  onError(job: Job<any>, error: any) {
    this.logger.error(`Failed job ${job.id} of type ${job.name}: ${error.message}`, error.stack);
  }

  @Process(EBullEvent.UPDATE_ADMIN_REGISTER)
  async handleUpdateAdminInfoEvent(job: Job<any>) {
    const request = job.data;
    await this.userService.update({
      id: request.userId,
      data: {
        merchantId: request.merchantId,
        branchId: request.branchId,
      },
    });

    const merchant = await this.merchantRepository.findById(request.merchantId);

    const currentCustomers = await this.userRepository.find({
      where: {
        role: EUserRole.USER,
      },
      attributes: ['id'],
    });

    const bulkData = currentCustomers.map((customer) => ({
      userId: customer.id,
      merchantId: request.merchantId,
      branchId: request.branchId,
    }));

    await Promise.all([
      this.branchUserRepository.bulkInsert(bulkData),
      this.serviceRepository.bulkInsert(
        this.seedServiceData(request.merchantId, merchant?.latitude, merchant?.longitude),
      ),
    ]);
    return true;
  }

  seedServiceData(merchantId: number, merchantLat?: number, merchantLng?: number) {
    return [
      {
        name: 'VỖ RUNG LONG ĐỜM PHỤC HỒI CHỨC NĂNG HÔ HẤP CHO TRẺ SƠ SINH VÀ TRẺ NHỎ',
        description:
          'Viêm nhiễm đường hô hấp là bệnh thường gặp ở trẻ khiến mũi, hầu, họng của trẻ sẽ phù nề và xuất tiết đờm nhớt. Nếu không được hỗ trợ để loại bỏ, xuất ra, đờm nhớt sẽ ứ đọng gây nhiễm khuẩn, khiến trẻ bỏ ăn, nôn ói, khó thở, thở khò khè kèm triệu chứng ho và sốt. Theo nghiên cứu, có khoảng hơn 30-40% trẻ có ít nhất một lần bị viêm nhiễm đường hô hấp trong đời. Hiện nay vật lý trị liệu hô hấp hay còn được gọi là kỹ thuật vỗ rung long đờm là một trong những phương pháp điều trị viêm nhiễm đường hô hấp hiệu quả nhất. Vỗ rung long đờm là phương pháp vật lý, hoặc bằng tay của kỹ thuật viên, hoặc bằng dụng cụ, hoặc cả hai để giúp cải thiện hiệu quả của hô hấp, giúp phổi giãn nở tốt hơn, tăng cường sức cơ hô hấp, và đào thải, bài trừ các chất tiết, đờm nhớt ra khỏi đường hô hấp. Vỗ rung long đờm dựa vào tính chất vật lý của chất khí để làm thay đổi áp suất trong đường dẫn khí, theo nhịp thở của trẻ để làm long đờm nhớt, thông thoáng đường thở.',
        price: 200000,
        merchantId,
        image: 'https://misalon.s3.ap-southeast-1.amazonaws.com/download.jpeg',
        latitude: merchantLat ? merchantLat : 20.980161,
        longitude: merchantLng ? merchantLng : 105.795471,
        type: 0,
        sku: generateUniqueSku(EServiceType.SERVICE),
        search: 'VỖ RUNG LONG ĐỜM PHỤC HỒI CHỨC NĂNG HÔ HẤP CHO TRẺ SƠ SINH VÀ TRẺ NHỎ',
      },
      {
        name: 'Dịch vụ chăm sóc da sau sinh',
        description:
          'Chăm sóc phụ nữ sau sinh tại nhà cũng giúp cho tinh thần của mẹ được thoải mái hơn, tránh trầm cảm sau sinh. Ngoài ra việc massage cho mẹ còn giúp cơ thể nhanh phục hồi',
        price: 1000000,
        merchantId,
        image:
          'https://misalon.s3.ap-southeast-1.amazonaws.com/5ddb40b969a3c-cach-cham-soc-da-mat-cho-ba-bau-tai-nha.jpg',
        latitude: merchantLat ? merchantLat : 20.980161,
        longitude: merchantLng ? merchantLng : 105.795471,
        type: 0,
        sku: generateUniqueSku(EServiceType.SERVICE),
        search: 'Dịch vụ chăm sóc da sau sinh',
      },
      {
        name: 'Dịch vụ tư vấn cho phụ nữ tiền sinh sản',
        description:
          'Dịch vụ tư vấn cho bà mẹ trước khi mang thai sẽ có tác động rất tích cực về mặt sức khỏe không chỉ của mẹ bầu mà còn cho cả thai nhi',
        price: 750000,
        merchantId,
        image:
          'https://misalon.s3.ap-southeast-1.amazonaws.com/20190717_091509_639565_20190520_134034_824.max-1800x1800.png',
        latitude: merchantLat ? merchantLat : 20.980161,
        longitude: merchantLng ? merchantLng : 105.795471,
        type: 0,
        sku: generateUniqueSku(EServiceType.SERVICE),
        search: 'Dịch vụ tư vấn cho phụ nữ tiền sinh sản',
      },
    ];
  }
}
