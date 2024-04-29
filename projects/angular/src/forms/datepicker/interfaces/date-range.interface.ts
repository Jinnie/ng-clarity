/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { DayModel } from '../model/day.model';

export interface DateRange {
  minDate?: DayModel;
  maxDate?: DayModel;
}

export interface DateRangeOption {
  label: string;
  value: string[];
  isCustomRange?: boolean;
}
