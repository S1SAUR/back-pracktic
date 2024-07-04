import { PartialType } from '@nestjs/mapped-types';
import { CreateProdactDto } from './create-prodact.dto';

export class UpdateProdactDto extends PartialType(CreateProdactDto) {}
