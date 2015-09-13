'use strict'

import SiteDispatcher from '../dispatchers/SiteDispatcher'
import SiteConstants from '../constants/SiteConstants'

const SiteActions = {
  navigate(current) {
    SiteDispatcher.dispatch({
      actionType: SiteConstants.SITE_NAVIGATE,
      current: current
    })
  }
}

export default SiteActions;
