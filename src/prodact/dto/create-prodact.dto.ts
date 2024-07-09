import { IsArray, IsNumber, IsOptional, IsString, MaxLength, MinLength, isArray, maxLength,  } from "class-validator"

export class CreateProdactDto {
    @MinLength(3)
    @MaxLength(256)
    @IsString()
    title: string

    @IsNumber()
    prace: number

    @IsOptional()
    @IsNumber()
    sale: number

    @IsString()
    img: string

    @IsString()
    description: string

    @IsArray()
    @IsNumber({},{each:true})
    categoryIds: number
}
