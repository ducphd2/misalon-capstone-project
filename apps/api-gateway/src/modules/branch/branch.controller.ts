import { QueryUtils } from '@libs/core';
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';

import { BranchService } from './branch.service';

import { JwtAuthGuard } from '@/api-gateway/core';
import { CreateBranchInput, PartialUpdateBranch } from '@/api-gateway/dtos';
import { MerchantCommonService } from '@/api-gateway/modules/merchant-common/merchant-common.service';

@Controller('branches')
export class BranchController {
  constructor(
    private readonly merchantService: MerchantCommonService,
    private readonly queryUtils: QueryUtils,
    private readonly branchService: BranchService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createBranch(@Body() data: CreateBranchInput) {
    const result = await this.branchService.createBranch(data);
    return result;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updateBranch(@Param('id') id: number, @Body() data: PartialUpdateBranch) {
    const result = await this.branchService.updateBranch(id, data);
    return result;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteBranch(@Param('id') id: number) {
    const result = await this.branchService.deleteBranch(id);
    return result;
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findBranchDetail(@Param('id') id: number) {
    const result = await this.branchService.findBranchDetail(id);
    return result;
  }
}
