import { environment } from 'src/environments/environment';
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class HelperService {

    private renderer: Renderer2;
    modalDisplayed = new Subject<string>();

    constructor(rendererFactory: RendererFactory2) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    public getDevice(): number {
        const ua = navigator.userAgent;

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
           return environment.devices.mobile;
        // } else if (/Chrome/i.test(ua)) {
        //     return environment.devices.chrome;
        } else {
            return environment.devices.desktop;
        }
    }

    public isSinglePageApp() {
        return environment.singlePageApp;
    }

    public openModal(modalName: string) {
        this.renderer.addClass(document.body, 'modal-open');
        this.modalDisplayed.next(modalName);
    }

    public closeModal() {
        this.renderer.removeClass(document.body, 'modal-open');
        this.modalDisplayed.next('');
    }

}
