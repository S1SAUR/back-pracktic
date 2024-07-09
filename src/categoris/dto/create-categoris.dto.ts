import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateCategorisDto {
    @MinLength(3)
    @MaxLength(256)
    @IsString()
    title: string;
}
