import * as React from "react";

export type HeaderContextType = {
    titleText: any,
    setTitleText: any
}

export type HeaderContextProviderType = {
    children: React.ReactNode
}

export type HeaderText = {
    text: string
}