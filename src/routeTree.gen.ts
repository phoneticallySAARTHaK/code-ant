/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PrivateRouteImport } from './routes/_private/route'
import { Route as AuthRouteImport } from './routes/_auth/route'
import { Route as PrivateHomeImport } from './routes/_private/home'
import { Route as AuthLoginImport } from './routes/_auth/login'
import { Route as publicPrivacyPolicyImport } from './routes/(public)/privacy-policy'

// Create/Update Routes

const PrivateRouteRoute = PrivateRouteImport.update({
  id: '/_private',
  getParentRoute: () => rootRoute,
} as any)

const AuthRouteRoute = AuthRouteImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const PrivateHomeRoute = PrivateHomeImport.update({
  id: '/home',
  path: '/home',
  getParentRoute: () => PrivateRouteRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => AuthRouteRoute,
} as any)

const publicPrivacyPolicyRoute = publicPrivacyPolicyImport.update({
  id: '/(public)/privacy-policy',
  path: '/privacy-policy',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthRouteImport
      parentRoute: typeof rootRoute
    }
    '/_private': {
      id: '/_private'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PrivateRouteImport
      parentRoute: typeof rootRoute
    }
    '/(public)/privacy-policy': {
      id: '/(public)/privacy-policy'
      path: '/privacy-policy'
      fullPath: '/privacy-policy'
      preLoaderRoute: typeof publicPrivacyPolicyImport
      parentRoute: typeof rootRoute
    }
    '/_auth/login': {
      id: '/_auth/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof AuthRouteImport
    }
    '/_private/home': {
      id: '/_private/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof PrivateHomeImport
      parentRoute: typeof PrivateRouteImport
    }
  }
}

// Create and export the route tree

interface AuthRouteRouteChildren {
  AuthLoginRoute: typeof AuthLoginRoute
}

const AuthRouteRouteChildren: AuthRouteRouteChildren = {
  AuthLoginRoute: AuthLoginRoute,
}

const AuthRouteRouteWithChildren = AuthRouteRoute._addFileChildren(
  AuthRouteRouteChildren,
)

interface PrivateRouteRouteChildren {
  PrivateHomeRoute: typeof PrivateHomeRoute
}

const PrivateRouteRouteChildren: PrivateRouteRouteChildren = {
  PrivateHomeRoute: PrivateHomeRoute,
}

const PrivateRouteRouteWithChildren = PrivateRouteRoute._addFileChildren(
  PrivateRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof PrivateRouteRouteWithChildren
  '/privacy-policy': typeof publicPrivacyPolicyRoute
  '/login': typeof AuthLoginRoute
  '/home': typeof PrivateHomeRoute
}

export interface FileRoutesByTo {
  '': typeof PrivateRouteRouteWithChildren
  '/privacy-policy': typeof publicPrivacyPolicyRoute
  '/login': typeof AuthLoginRoute
  '/home': typeof PrivateHomeRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_auth': typeof AuthRouteRouteWithChildren
  '/_private': typeof PrivateRouteRouteWithChildren
  '/(public)/privacy-policy': typeof publicPrivacyPolicyRoute
  '/_auth/login': typeof AuthLoginRoute
  '/_private/home': typeof PrivateHomeRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/privacy-policy' | '/login' | '/home'
  fileRoutesByTo: FileRoutesByTo
  to: '' | '/privacy-policy' | '/login' | '/home'
  id:
    | '__root__'
    | '/_auth'
    | '/_private'
    | '/(public)/privacy-policy'
    | '/_auth/login'
    | '/_private/home'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthRouteRoute: typeof AuthRouteRouteWithChildren
  PrivateRouteRoute: typeof PrivateRouteRouteWithChildren
  publicPrivacyPolicyRoute: typeof publicPrivacyPolicyRoute
}

const rootRouteChildren: RootRouteChildren = {
  AuthRouteRoute: AuthRouteRouteWithChildren,
  PrivateRouteRoute: PrivateRouteRouteWithChildren,
  publicPrivacyPolicyRoute: publicPrivacyPolicyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_auth",
        "/_private",
        "/(public)/privacy-policy"
      ]
    },
    "/_auth": {
      "filePath": "_auth/route.tsx",
      "children": [
        "/_auth/login"
      ]
    },
    "/_private": {
      "filePath": "_private/route.tsx",
      "children": [
        "/_private/home"
      ]
    },
    "/(public)/privacy-policy": {
      "filePath": "(public)/privacy-policy.tsx"
    },
    "/_auth/login": {
      "filePath": "_auth/login.tsx",
      "parent": "/_auth"
    },
    "/_private/home": {
      "filePath": "_private/home.tsx",
      "parent": "/_private"
    }
  }
}
ROUTE_MANIFEST_END */