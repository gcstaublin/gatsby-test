let Button;
let Headline;
let Icon;
let Textarea;
let Link;

if (typeof window !== `undefined`) {
  const components = window.__uniformui_Components;
  Button = components.Button;
  Headline = components.Headline;
  Icon = components.Icon;
  Textarea = components.Textarea;
  Link = components.Link;
}

export default {
  Button,
  Headline,
  Icon,
  Textarea,
  Link
};
