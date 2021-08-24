
export function SetSelectedInternalSection(state,internalSection) {
    state.selectedInternalSection = internalSection
}


export function SetInternalSectionsNames(state,internalSectionsNames) {
    let names = []
    for (const value of internalSectionsNames){
        names.push(value.title)
    }
    state.internalSectionsNames = names
}

export function SetInternalSections(state, internalSections) {
    state.internalSections = internalSections
}
