# 🛠 Formwork Next

A bare-bones starter for getting up and running with a Next JS front-end and a Sanity back-end.

## Getting an existing project running 🚙

1. Click Code > Open with Github Desktop.
2. Once you've downloaded the repo, open it up in VS Code.
3. You should see two terminal screens start up (assuming you have [Restore Terminals](https://marketplace.visualstudio.com/items?itemName=EthanSK.restore-terminals) installed). They will both fail, so you can ctrl+c on both.
4. Add your .env file to your local repo. This will need to be supplied by an existing developer who's working on the project.
5. In your Sanity terminal window, run `sanity install && sanity start`. You should see the studio start running on `localhost:3333`. If you don't have access to the studio, ask an existing developer to add you.
6. In your root directory window run `yarn && yarn dev`.
7. Once these steps are completed you should have a running front-end and sanity studio and you'll be ready to start working on the project ⚡️.

## Setting up a new project (in 21 easy steps) 🏌🏻‍♂️

1. Click the green "Use this template" button above, and set up the new project repo. It should be private.
2. Click Code > Open with Github Desktop

### Sanity

3. Create a new Sanity project [here](https://www.sanity.io/organizations/op151nfww).
4. Once this is done it will ask if you'd like to reconfigure the sanity studio, respond yes, then create a new project. Use default dataset configuration.
5. Run `sanity dataset import production.tar.gz production` this copies a dump of the default dataset in to our new Sanity project.
6. Run `sanity start` and you should now see a fresh studio pop up with some basic initial content 🌱.
7. Open your sanity.json file and change project name to the name of your project.
8. Run `sanity deploy` to deploy the hosted version of the studio that the client will use.

### Next

9. Open the root folder in terminal and run `yarn`. This installs the project dependencies.
10. Copy .env.example to create a new .env file. From within the studio folder run `sanity manage`. This will bring up the Sanity project dashboard.
11. Add the project id and dataset to your .env file
12. Go to Settings > Tokens and create a new token called Next with Editor permissions. Add this token to your .env file.
13. You should now be able to run `yarn dev` from the root folder and the site will compile with content from your new studio 🎉.
14. Commit your changes to master.

### Vercel

15. Open our [Vercel account](https://vercel.com/formwork) and select Add New > Project.
16. Choose the respository and import
17. Add your .env variables to the project.
18. Deploy the site.
19. Add your SANITY_STUDIO_PREVIEW_URL to your project, make sure you add it to Vercel, your local project and the studio .env.production file.
20. To set up On-demand Revalidation run `sanity manage` from the studio directory. Go to API and add a webhoook. Call it On-demand Revalidation. The URl should be https://[your-vercel-url]/api/revalidate. And the secret should be equal to the SANITY_REVALIDATE_SECRET in your .env file.

### Final settings

21. Go in to your Sanity Studio and remove any dummy content you don't need.

You did it 🥲

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
