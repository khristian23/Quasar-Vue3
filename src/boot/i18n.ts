// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// Set i18n instance on app
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'
// you'll need to create the src/i18n/index.js file too

const i18n = createI18n({
  locale: 'en-US',
  messages
})

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default ({ app }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  app.use(i18n)
}

export { i18n }
