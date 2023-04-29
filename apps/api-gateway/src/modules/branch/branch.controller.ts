import { QueryUtils } from '@libs/core';
import { UserModel } from '@libs/database/entities';
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';

import { BranchService } from './branch.service';

import { JwtAuthGuard, User } from '@/api-gateway/core';
import { CreateBranchInput, PartialUpdateBranch } from '@/api-gateway/dtos';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';
import { BranchPayload } from '@/api-gateway/types';

@Controller('branches')
export class BranchController {
  constructor(
    private readonly merchantService: MerchantCommonService,
    private readonly queryUtils: QueryUtils,
    private readonly branchService: BranchService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createBranch(@User() admin: UserModel, @Body() data: CreateBranchInput): Promise<BranchPayload> {
    const result = await this.branchService.createBranch(admin, data);
    return result;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updateBranch(
    @User() admin: UserModel,
    @Param('id') id: number,
    @Body() data: PartialUpdateBranch,
  ): Promise<BranchPayload> {
    const result = await this.branchService.updateBranch(admin, id, data);
    return result;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteBranch(@User() admin: UserModel, @Param('id') id: number) {
    const result = await this.branchService.deleteBranch(admin, id);
    return result;
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findBranchDetail(@User() admin: UserModel, @Param('id') id: number) {
    const result = await this.branchService.findBranchDetail(id);
    return result;
  }
}
