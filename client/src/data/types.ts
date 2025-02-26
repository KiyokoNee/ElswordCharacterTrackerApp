import * as React from "react";

export type HeaderContextType = {
    headerText: any,
    setHeaderText: any
}

export type HeaderContextProviderType = {
    children: React.ReactNode
}

export type HeaderText = {
    text: string
}