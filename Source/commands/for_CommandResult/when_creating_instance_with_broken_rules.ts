// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { CommandResult } from '../index';
import { BrokenRule } from '@dolittle/rules';

describe('when creating instance without any broken rules', () => {
    const result = new CommandResult([{} as BrokenRule]);

    it('should be considered failed', () => result.isSuccess.should.be.false);
    it('should have a broken rule', () => result.brokenRules.should.be.lengthOf(1));
});
