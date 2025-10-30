import { Observable } from "rxjs";
import { BasicPackageGroup } from "../../models/packageGroup.model";

export abstract class IPackageGroupService {
  abstract getNewest(): Observable<BasicPackageGroup[]>;
}