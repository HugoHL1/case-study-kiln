const exampleString = "HELLO" as const;

interface String {
    toLowerCaseExtended(): string;
    includesExtended(searchString: string, position?: number): boolean;
    splitExtended(separator: string): string[];
    replaceExtended(searchValue: string, replaceValue: string): string;
    startsWithExtended(searchString: string, position?: number): boolean;
  }

String.prototype.toLowerCaseExtended = function(): string {
    return this.toLowerCase();
};
console.log(exampleString.toLowerCaseExtended());

String.prototype.includesExtended = function(searchString: string, position: number = 0): boolean {
    return this.includes(searchString, position);
};
console.log(exampleString.includesExtended(""));

String.prototype.splitExtended = function(separator: string): string[] {
    return this.split(separator);
};
console.log(exampleString.splitExtended(""));

String.prototype.replaceExtended = function(searchValue: string, replaceValue: string): string {
    return this.replace(searchValue, replaceValue);
};
console.log(exampleString.replaceExtended("", "HEY"));

String.prototype.startsWithExtended = function(searchString: string, position: number = 0): boolean {
    return this.startsWith(searchString, position);
};
console.log(exampleString.startsWithExtended(""));