export default (delay:number) => {
    return new Promise<void>(resolve => setTimeout(resolve, delay));
}