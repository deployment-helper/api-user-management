export class Eval {
  public static templateToString = <T>(obj: T, template: string): string => {
    return eval(template);
  };
}
