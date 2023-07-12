var para = new URLSearchParams(window.location.search);
const ORGANISATION_NAME = para.get("ORGANISATION_NAME");
const EXPERIMENT = para.get("EXPERIMENT");

// config
let CMS_CONFIG = {
  backend: {
    name: "github",
    repo: `${ORGANISATION_NAME}/${EXPERIMENT}`,
    branch: "main",
    commit_messages: {
      create: "Created {{collection}} “{{slug}}” by {{author-login}}",
      update: "Updated {{collection}} “{{slug}}” by {{author-login}}",
      delete: "Deleted {{collection}} “{{slug}}” by {{author-login}}",
      uploadMedia: "Uploaded “{{path}}” by {{author-login}}",
      deleteMedia: "Deleted “{{path}}” by {{author-login}}",
      openAuthoring: "fss {{message}}",
    },
  },
  media_folder: "experiment/images",
  public_folder: "images",

  collections: [
    {
      name: "Experiment",
      label: EXPERIMENT,
      create: false,
      slug: "{{slug}}",
      delete: false,
      files: [
        {
          name: "experiment-name",
          label: "Experiment Name",
          file: "experiment/experiment-name.md",
          fields: [{ name: "body", label: "Body", widget: "markdown" }],
        },
        {
          name: "aim",
          label: "Aim",
          file: "experiment/aim.md",
          fields: [{ name: "body", label: "Body", widget: "markdown" }],
        },
        {
          name: "theory",
          label: "Theory",
          file: "experiment/theory.md",
          fields: [{ name: "body", label: "Body", widget: "markdown" }],
        },

        {
          name: "procedure",
          label: "Procedure",
          file: "experiment/procedure.md",
          fields: [{ name: "body", label: "Body", widget: "markdown" }],
        },
        {
          name: "contributors",
          label: "Contributors",
          file: "experiment/contributors.md",
          fields: [{ name: "body", label: "Body", widget: "markdown" }],
        },
        {
          name: "references",
          label: "References",
          file: "experiment/references.md",
          fields: [{ name: "body", label: "Body", widget: "markdown" }],
        },
        {
          name: "readme",
          label: "README",
          file: "experiment/README.md",
          fields: [{ name: "body", label: "Body", widget: "markdown" }],
        },
      ],
    },
    {
      name: "simulation",
      label: "Simulation",
      media_folder: "",
      create: false,
      slug: "simulation-upload",
      files: [
        {
          name: "simulation-upload",
          label: "View/Upload Simulation",
          file: "experiment/simulation/simulation-upload.md",
          fields: [
            {
              name: "file",
              label: "File",
              widget: "file",
              media_library: { config: { multiple: true } },
              required: false,
            },
          ],
        },
      ],
    },
    {
      name: "simulation-css",
      label: "Simulation CSS",
      media_folder: "",
      create: false,
      slug: "simulation-upload-css",
      files: [
        {
          name: "simulation-upload-css",
          label: "View/Upload Simulation CSS",
          file: "experiment/simulation/css/simulation-upload-css.md",
          fields: [
            {
              name: "file",
              label: "File",
              widget: "file",
              required: false,
            },
          ],
        },
      ],
    },
    {
      name: "simulation-js",
      label: "Simulation JS",
      media_folder: "",
      create: false,
      slug: "simulation-upload-js",
      files: [
        {
          name: "simulation-upload-js",
          label: "View/Upload Simulation JS",
          file: "experiment/simulation/js/simulation-upload-js.md",
          fields: [
            {
              name: "file",
              label: "File",
              widget: "file",
              required: false,
            },
          ],
        },
      ],
    },
    {
      name: "simulation-images",
      label: "Simulation Images",
      media_folder: "",
      create: false,
      slug: "simulation-upload-images",

      files: [
        {
          name: "simulation-upload-images",
          label: "View/Upload Simulation Images",
          file: "experiment/simulation/images/simulation-upload-images.md",
          fields: [
            {
              name: "file",
              label: "File",
              widget: "file",
              required: false,
            },
          ],
        },
      ],
    },
  ],
};

function back_to_home() {
  window.location.href = `/`;
}

function open_deploy() {
  window.open(
    `https://${ORGANISATION_NAME}.github.io/${EXPERIMENT}/index.html`,
    "_blank"
  );
}

function open_code() {
  // let accessToken = JSON.parse(localStorage.getItem("netlify-cms-user")).token;
  // // window.open(
  // //   `https://codesandbox.io/s/github/${ORGANISATION_NAME}/${EXPERIMENT}?access_token=${accessToken}`,
  // //   "_blank"
  // // );
  // // Construct the redirect URL with the access token and repository information
  // const folderPath = "experiment/simulation";
  // const redirectUrl = `https://github.com/${ORGANISATION_NAME}/${EXPERIMENT}/codespaces?token=${accessToken}&folder=${encodeURIComponent(
  //   folderPath
  // )}`;
  // window.open(redirectUrl, "_blank");
  var params = new URLSearchParams();
  params.append("EXPERIMENT", EXPERIMENT);
  params.append("ORGANISATION_NAME", ORGANISATION_NAME);
  // window.open(`/admin/codespace?` + params.toString(), "_blank");
  window.open(
    `https://codesandbox.io/s/github/${ORGANISATION_NAME}/${EXPERIMENT}/main`,
    "_blank"
  );
}

async function open_code1() {
  const accessToken = JSON.parse(
    localStorage.getItem("netlify-cms-user")
  ).token;

  try {
    // const response = await fetch(
    //   `https://api.github.com/repos/${ORGANISATION_NAME}/${EXPERIMENT}/contents?ref=main`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //   }
    // );
    // const contents = await response.json();

    // const experimentFolder = contents.find(
    //   (item) => item.name === "experiment"
    // );

    // if (!experimentFolder || experimentFolder.type !== "dir") {
    //   console.error("Experiment folder not found");
    //   return;
    // }

    // const experimentFolderContentsResponse = await fetch(experimentFolder.url, {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // });
    // const experimentFolderContents =
    //   await experimentFolderContentsResponse.json();

    // const simulationFolder = experimentFolderContents.find(
    //   (item) => item.name === "simulation"
    // );

    // if (!simulationFolder || simulationFolder.type !== "dir") {
    //   console.error("Simulation folder not found");
    //   return;
    // }
    var params = new URLSearchParams();
    params.append("EXPERIMENT", EXPERIMENT);
    params.append("ORGANISATION_NAME", ORGANISATION_NAME);
    window.open(`/admin/codesandbox?` + params.toString(), "_blank");
    // const sandboxUrl = `https://codesandbox.io/s/github/${ORGANISATION_NAME}/${EXPERIMENT}/main`;

    window.open(sandboxUrl, "_blank");
  } catch (error) {
    console.error("Error:", error);
  }

  // window.open(
  //   `https://codesandbox.io/s/github/${ORGANISATION_NAME}/${EXPERIMENT}?access_token=${accessToken}`,
  //   "_blank"
  // );
  // Construct the redirect URL with the access token and repository information
}

// Failed to persist entry: API_ERROR: Although you appear to have the correct authorization credentials, the `virtual-labs-cms` organization has enabled OAuth App access restrictions, meaning that data access to third-parties is limited. For more information on these restrictions, including how to enable this app, visit https://docs.github.com/articles/restricting-access-to-your-organization-s-data/
