import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdatesService {

  endPoint = "http://localhost:8080/api/upgrades";

  constructor(private httpClient: HttpClient) { }

  getUpgrades(weaponId: any) {
    console.log(this.httpClient.get(`${this.endPoint}?weaponId=${weaponId}`));
    return this.httpClient.get(`${this.endPoint}?weaponId=${weaponId}`);
  }

  createUpgrades(upgrades: any) {
    let formData = new FormData();
    formData.append("tier", upgrades.tier);
    formData.append("jewels", upgrades.jewels);
    formData.append("weaponId", upgrades.weaponId);

    return this.httpClient.post(this.endPoint, formData);
  }

  getUpgradesById(id: any) {
    return this.httpClient.get(`${this.endPoint}/${id}`);
  }

  deleteUpgrades(id: any) {
    return this.httpClient.delete(`${this.endPoint}/${id}`);
  }

  updateUpgrades(id: any, upgrades: any) {
    let formData = new FormData();

    formData.append("tier", upgrades.tier);
    formData.append("jewels", upgrades.jewels);
    formData.append("weaponId", upgrades.weaponId);
    
    return this.httpClient.put(`${this.endPoint}/${id}`, formData);
  }
}