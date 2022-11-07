/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input
} from '@angular/core';

@Directive({
  selector: 'clr-dg-column',
  host: {
    '[attr.aria-label]': 'ariaLabel',
  },
})
export class ClrDatagridColumnAriaLabel
  implements AfterViewInit {
  constructor(
    private elementRef: ElementRef,
  ) {}

  @Input('aria-label')
  ariaLabelInput: string;

  ariaLabel: string;

  ngAfterViewInit() {
    requestAnimationFrame(() => {
      if (this.ariaLabelInput) {
        this.ariaLabel = this.ariaLabelInput;
      } else {
        const columnText = this.elementRef.nativeElement.querySelector('.datagrid-column-title').textContent;
        this.ariaLabel = columnText;
      }
    });
  }
}
