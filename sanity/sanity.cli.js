/* eslint-disable no-process-env */
import { projectId, dataset } from './sanity.config.js'
// import {loadEnvConfig} from '@next/env'
import {defineCliConfig} from 'sanity/cli'

// const dev = process.env.NODE_ENV !== 'production'
// loadEnvConfig(__dirname, dev, {info: () => null, error: console.error})

export default defineCliConfig({api: {projectId, dataset}})