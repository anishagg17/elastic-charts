/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { mergePartial, RecursivePartial } from '../../../../utils/common';
import { Dimensions } from '../../../../utils/dimensions';
import { config as defaultConfig } from '../../layout/config/config';
import { Config } from '../../layout/types/config_types';
import { ShapeViewModel } from '../../layout/types/viewmodel_types';
import { shapeViewModel } from '../../layout/viewmodel/viewmodel';
import { WordcloudSpec } from '../../specs';

/** @internal */
export function render(spec: WordcloudSpec, parentDimensions: Dimensions): ShapeViewModel {
  const { width, height } = parentDimensions;
  const { config } = spec;
  const partialConfig: RecursivePartial<Config> = { ...config, width, height };
  const cfg: Config = mergePartial(defaultConfig, partialConfig);
  return shapeViewModel(spec, cfg);
}
