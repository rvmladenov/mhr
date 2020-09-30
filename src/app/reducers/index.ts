/* Copyright © Spearhead AG. All rights reserved.
Republication or redistribution of Spearheads Software content is prohibited
without the prior written consent of Spearhead AG.
ANY USE OF THIS CODE CONSTITUTES ACCEPTANCE OF THE TERMS OF THE COPYRIGHT NOTICE.
================================================================================
COPYRIGHT NOTICE
================================================================================
This code is proprietary software.
Proprietary software is computer software licensed under exclusive legal right
of the copyright holder.
If you have obtained a license from Spearhead you have been given the right to
use the software under certain conditions,but restricted from other uses, such
as modification, further distribution, or reverse engineering.

Copyright (c) 2018, Spearhead AG, Switzerland.
All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are not permitted.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

import {
    ActionReducer,
    ActionReducerMap,
    MetaReducer,
    Action
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { RendererState } from '../core/store/reducers/renderer.reducers';


// tslint:disable-next-line:no-empty-interface
export interface AppState {
    articles: RendererState;
}

export const reducers: ActionReducerMap<AppState> = {
    articles: undefined
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];