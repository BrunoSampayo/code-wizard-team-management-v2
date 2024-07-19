export default interface UserUseCase<IN, OUT> {
  execute(input: IN): Promise<OUT>;
}
