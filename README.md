# 🛠 Formwork Next

A bare-bones starter for getting up and running with a Next JS front-end and a Sanity back-end.

## Getting an existing project running 🔌

1. Click Code > Open with Github Desktop.
2. Once you've downloaded the repo, open it up in VS Code.
3. You should see two terminal screens start up (assuming you have [Restore Terminals](https://marketplace.visualstudio.com/items?itemName=EthanSK.restore-terminals) installed). They will both fail, so you can ctrl+c on both.
4. In the Next directory run `vercel env pull .env` to grab your environment variables.
5. In your root directory window run `yarn && yarn dev`.
6. In your sanity directory window run `yarn && yarn dev`.
7. You should now have the project up and running.

## Starting a new project 📐

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fformwork-build%2Fsanity-template-formwork&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx)

### Local setup
1. Once your site has successfully deployed, within the Vercel settings add one extra env variable: `SANITY_STUDIO_PREVIEW_URL="https://your-project.vercel.app/"`
3. Click Code > Open in Github Desktop
4. Open up the local repo in VS Code and run `vercel link` to link the project back to Vercel.
5. Run `vercel env pull .env` to grab your env files. Keep it tidy and remove the empty system variables.
6. Open sanity.config.js and paste in the `projectId` & `vercelUrl`

### Next
1. Run `yarn && yarn dev` from the root.
2. You should now be up and running.

### Sanity
1. Run `yarn && yarn dev` from the sanity directory.
1. To set up On-demand Revalidation run `sanity manage` from the sanity directory. Go to API and add a webhoook. Call it Revalidation. The URl should be https://your-project.vercel.app/api/revalidate. We no longer need to use a secret for this file.

### Final settings
1. In the sanity directory run `sanity dataset import production.tar.gz production` to import dummy content.
2. Go in to your Sanity Studio and remove any dummy content you don't need.
3. Deploy your Sanity studio by running `sanity deploy` in the sanity directory.

You're ready to go 🚍

## VS Code Snippets 💆‍♀️

Below is a list of all available snippets and the triggers of each one. The **→** means the `TAB` key.

| Trigger                       | Content                                                                                                          |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `bc→`                         | basic functional component                                                                                       |
| `bcs→`                        | functional component with state                                                                                  |
| `bce→`                        | functional component with useEffect                                                                              |
| `bcse→`                       | functional component with state & useEffect                                                                      |
| `ue→`                         | useEffect skeleton                                                                                               |
| `us→`                         | useState skeleton (<i>hint: After typing the state name press tab again to autoselect the setState section.</i>) |
| `ur→`                         | useRef skeleton                                                                                                  |
| `ic→`                         | import Component                                                                                                 |
| `iu→`                         | import Utility                                                                                                   |
| `im→`                         | import a module                                                                                                  |
| `imn→`                        | import a named export from a module                                                                              |
| `cl→`                         | console.log                                                                                                      |
| `mob→`                        | mobile                                                                                                           |
| `tab→`                        | tablet                                                                                                           |
| `var→`                        | var(--)                                                                                                          |
| `st→`                         | styled definition                                                                                                |
| `stc→`                        | styled component definition                                                                                      |
| `pta→`                        | `PropTypes.array,`                                                                                               |
| `ptar→`                       | `PropTypes.array.isRequired,`                                                                                    |
| `ptb→`                        | `PropTypes.bool,`                                                                                                |
| `ptbr→`                       | `PropTypes.bool.isRequired,`                                                                                     |
| `ptf→`                        | `PropTypes.func,`                                                                                                |
| `ptfr→`                       | `PropTypes.func.isRequired,`                                                                                     |
| `ptn→`                        | `PropTypes.number,`                                                                                              |
| `ptnr→`                       | `PropTypes.number.isRequired,`                                                                                   |
| `pto→`                        | `PropTypes.object,`                                                                                              |
| `ptor→`                       | `PropTypes.object.isRequired,`                                                                                   |
| `pts→`                        | `PropTypes.string,`                                                                                              |
| `ptsr→`                       | `PropTypes.string.isRequired,`                                                                                   |
| `ptsm→`                       | `PropTypes.symbol,`                                                                                              |
| `ptsmr→`                      | `PropTypes.symbol.isRequired,`                                                                                   |
| `ptan→`                       | `PropTypes.any,`                                                                                                 |
| `ptanr→`                      | `PropTypes.any.isRequired,`                                                                                      |
| `ptnd→`                       | `PropTypes.node,`                                                                                                |
| `ptndr→`                      | `PropTypes.node.isRequired,`                                                                                     |
| `ptel→`                       | `PropTypes.element,`                                                                                             |
| `ptelr→`                      | `PropTypes.element.isRequired,`                                                                                  |
| `pti→`                        | `PropTypes.instanceOf(ClassName),`                                                                               |
| `ptir→`                       | `PropTypes.instanceOf(ClassName).isRequired,`                                                                    |
| `pte→`                        | `PropTypes.oneOf(['News', 'Photos']),`                                                                           |
| `pter→`                       | `PropTypes.oneOf(['News', 'Photos']).isRequired,`                                                                |
| `ptet→`                       | `PropTypes.oneOfType([PropTypes.string, PropTypes.number]),`                                                     |
| `ptetr→`                      | `PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,`                                          |
| `ptao→`                       | `PropTypes.arrayOf(PropTypes.number),`                                                                           |
| `ptaor→`                      | `PropTypes.arrayOf(PropTypes.number).isRequired,`                                                                |
| `ptoo→`                       | `PropTypes.objectOf(PropTypes.number),`                                                                          |
| `ptoor→`                      | `PropTypes.objectOf(PropTypes.number).isRequired,`                                                               |
| `ptoos→`                      | `PropTypes.objectOf(PropTypes.shape()),`                                                                         |
| `ptoosr→`                     | `PropTypes.objectOf(PropTypes.shape()).isRequired,`                                                              |
| `ptsh→`                       | `PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}),`                                        |
| `ptshr→`                      | `PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}).isRequired,`                             |
| `sd→`                         | Sanity document                                                                                                  |
| `so→`                         | Sanity Object                                                                                                    |
| `sot→`                        | Sanity Object with Tabs                                                                                          |
| `sf→`                         | Sanity Field                                                                                                     |
| `sff→`                        | Sanity Field with Fieldset                                                                                       |
| `sa→`                         | Sanity Array Field                                                                                               |
| `sr→`                         | Sanity Reference Field                                                                                           |
| `de→`                         | Sanity Description                                                                                               |
| `imageSize→`                  | Image size description                                                                                           |
| `imageWidth→`                 | Image width description                                                                                          |
| `sanityPreviewSelect→`        | Basic preview object                                                                                             |
| `sanitySelect→`               | Basic select object for preview                                                                                  |
| `sanityPrepare→`              | Prepare function for preview                                                                                     |
| `sanityPreviewSelectPrepare→` | Preview with selection object and prepare function                                                               |
| `sanityRequired→`             | Add required validation                                                                                          |
