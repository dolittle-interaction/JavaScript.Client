// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ICommand, CommandInputValidators } from '../../index';
import { CommandInputValidatorFor } from '../../validation';

export class MyCommand implements ICommand {
    type: string = '';

    email: string = 'blah';
}

export class MyCommandValidationRules extends CommandInputValidatorFor<MyCommand> {
    constructor() {
        super();
        this.rulesFor(_ => _.email).emailAddress();
    }
}

export class a_command_and_validator {
    command: MyCommand = new MyCommand();
    commandValidationRules: MyCommandValidationRules = new MyCommandValidationRules();
}