import * as CONSTANTS     from '../constants'

export const selectedRepoReducer = (state = null, action) => {
    switch (action.type) {
        case CONSTANTS.SELECT_ONE_REPO:
        case CONSTANTS.UPDATE_SELECTED_REPO_SUCCESS:
        // case CONSTANTS.ADD_TAG_FOR_REPO_SUCCESS:
        // case CONSTANTS.REMOVE_TAG_FOR_REPO_SUCCESS:
        // case CONSTANTS.UPDATE_REPO_CATEGORIES_SUCCESS:
        // case CONSTANTS.UPDATE_REPO_CONTRIBUTORS_SUCCESS:
            return action.repo
        default:
            return state
    }
}

export const selectedRepoTagsReducer = (state = [], action) => {
    switch (action.type) {
        case CONSTANTS.QUERY_REPO_TAGS_SUCCESS:
            return action.tags
        default:
            return state
    }
}

export const selectedRepoCatsReducer = (state = [], action) => {
    switch (action.type) {
        case CONSTANTS.QUERY_REPO_CATEGORIES_SUCCESS:
            return action.categories
        default:
            return state
    }
}
