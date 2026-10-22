import { Injectable } from '@angular/core';
import { ModalConfig } from '../common/modal/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isOpen = false;
  config = new ModalConfig

  open(config: ModalConfig) {
    this.config = {...this.config, ...config}
    this.isOpen = true;
  }

}
