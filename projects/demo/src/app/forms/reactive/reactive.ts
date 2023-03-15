/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

class BasicReactiveDemo {
  model = new FormGroup({
    basic: new FormControl(''),
    container: new FormControl(''),
    required: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/asdfasdf/)]),
  });

  submit() {
    console.log(this);
  }
}

@Component({
  templateUrl: './reactive.html',
})
export class FormsReactiveDemo extends BasicReactiveDemo {}

@Component({
  templateUrl: './reactive.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsReactiveOnPushDemo extends BasicReactiveDemo {}
