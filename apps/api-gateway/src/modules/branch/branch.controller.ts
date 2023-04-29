import { QueryUtils } from '@libs/core';
import { UserModel } from '@libs/database/entities';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';

import { BranchService } from './branch.service';

import { JwtAuthGuard, User } from '@/api-gateway/core';
import { BaseQueryDto, CreateBranchInput, PartialUpdateBranch } from '@/api-gateway/dtos';
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
    try {
      const result = await this.branchService.createBranch(admin, data);
      return result;
    } catch (error) {
      console.log('Create branch error: ', error);
    }
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async updateBranch(
    @User() admin: UserModel,
    @Param('id') id: number,
    @Body() data: PartialUpdateBranch,
  ): Promise<BranchPayload> {
    try {
      const result = await this.branchService.updateBranch(admin, id, data);
      return result;
    } catch (error) {
      console.log('Update branch error: ', error);
    }
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteBranch(@User() admin: UserModel, @Param('id') id: number) {
    try {
      const result = await this.branchService.deleteBranch(admin, id);
      return result;
    } catch (error) {
      console.log('Delete branch error: ', error);
    }
  }

  @Get('merchant/:id')
  @UseGuards(JwtAuthGuard)
  async findAllBranchByMerchant(@User() admin: UserModel, @Param('id') id: number, @Query() query?: BaseQueryDto) {
    const result = await this.branchService.findAllBranch(id, query);
    return result;
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findBranchDetail(@User() admin: UserModel, @Param('id') id: number) {
    const result = await this.branchService.findBranchDetail(id);
    return result;
  }
}
