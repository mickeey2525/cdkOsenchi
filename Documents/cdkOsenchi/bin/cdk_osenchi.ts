#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkOsenchiStack } from '../lib/cdk_osenchi-stack';

const app = new cdk.App();
new CdkOsenchiStack(app, 'CdkOsenchiStack');
