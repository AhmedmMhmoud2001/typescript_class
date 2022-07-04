var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
        console.log("Employee");
    }
    Employee.prototype.ShowEmployeeInfo = function () {
        console.log(this.name);
        console.log(this.age);
    };
    ;
    return Employee;
}());
var ahmed = new Employee;
ahmed.name = "ahmed";
// ahmed.age=21;
ahmed.ShowEmployeeInfo();
var mahmoud = new Employee;
mahmoud.name = "mahmoud";
// mahmoud.age =30 ;
mahmoud.ShowEmployeeInfo();
var Clint = /** @class */ (function (_super) {
    __extends(Clint, _super);
    function Clint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Clint.prototype.ShowClintInfo = function () {
        console.log(this.project);
    };
    return Clint;
}(Employee));
var clint1 = new Clint;
clint1.name = "hamd";
// clint1.age=38;
clint1.project = "fronend";
clint1.ShowEmployeeInfo();
