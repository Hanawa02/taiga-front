/*
 * Copyright (C) 2014-2015 Taiga Agile LLC <taiga@taiga.io>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 * File: discover-search.controller.coffee
 */

import * as _ from "lodash"

import {Component, Input} from "@angular/core"
import {ActivatedRoute, Router} from "@angular/router"
import {AppMetaService} from "../../services/app-meta.service"
import {DiscoverProjectsService} from "../services/discover-projects.service"
import {TranslateService} from "@ngx-translate/core"
import { Store } from "@ngrx/store"
import { search } from "@ngrx/router-store"
import { IState } from "../../../app.store";
import { SearchDiscoverProjects } from "../discover.actions"

@Component({
    selector: "tg-discover-search-results",
    template: require("./discover-search-results.jade")(),
})
export class DiscoverSearchResults {
    @Input() projects
}
