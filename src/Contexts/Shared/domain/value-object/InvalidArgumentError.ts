export class InvalidArgumentError {
    readonly exception: string;
    constructor( exception: string) {
        this.exception = exception;
    }

    InvalidArgumentError(): string {
        return this.exception;
    }
}