import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { BasicPackageGroup } from '../../models/packageGroup.model';
import { ApiResponse } from '../../models/response.model';
import { IPackageGroupService } from '../abstracts/package-group.abstract';

@Injectable({
  providedIn: 'root'
})
export class PackageGroupService implements IPackageGroupService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient)
  {
  }

  getNewest(): Observable<BasicPackageGroup[]> {
    return this.http.get<ApiResponse<BasicPackageGroup[]>>(`${this.apiUrl}/api/guests/packages/groups/newest`).pipe(map(res => res.data));
  }
}
