/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus } from "@nestjs/common";

export class CustomException extends HttpException {
    constructor(e: string) {
        super(e, HttpStatus.NOT_FOUND);
    }
}