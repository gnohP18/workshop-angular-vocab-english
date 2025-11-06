import { Observable } from "rxjs";
import { BasicPackage } from "../../models/package.model";
import { BasicPackageGroup } from "../../models/packageGroup.model";

export abstract class IPackageGroupService {
  abstract getNewestPackageGroup(): Observable<BasicPackageGroup[]>;
  abstract getNewestPackage(): Observable<BasicPackage[]>;
}