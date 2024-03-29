let url = encodeURIComponent(window.location.href), title = document.title, cvShareOptions;

const defaultOptions = {
  shape: "",
  iconColor: "",
  onHoverColor: ""
};

const icons = {
  facebook: {
    icon: `<svg data-icon="facebook" class=" w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19"> <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/> </svg>`,
    url: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  },

  twitter: {
    icon: `<svg data-icon="twitter" class=" w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path fill="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"/> </svg>`,
    url: `http://twitter.com/share?text=${title}&url=${url}`,
  },
  reddit: {
    icon: `<svg data-icon="reddit" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6 bi bi-reddit" viewBox="0 0 16 16"> <path d="M6.167 8a.83.83 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661m1.843 3.647c.315 0 1.403-.038 1.976-.611a.23.23 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83s.83-.381.83-.83a.831.831 0 0 0-1.66 0z"/> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165"/> </svg>`,
    url: `http://www.reddit.com/submit?url=${url}&title=${title}`,
  },
  linkedin: {
    icon: `<svg data-icon="linkedin" class=" w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
    <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
    <path d="M3 5.012H0V15h3V5.012Z"/>
  </svg>`,
    url: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  },
  email: {
    icon: `<svg data-icon="email" class=" w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"/> </svg>`,
    url: `mailto:to@example.com?subject=${title}&text=${url}`,
  },
};

const getOptions = () => {
    if(!cvShareOptions) return defaultOptions;
    return { ...defaultOptions, ...cvShareOptions };
};

const openShare = (t) => {
  const icon = t.getAttribute("data-icon");
  console.log(icon);
  const ourl = icons[icon]["url"];
  window.open(ourl);
};

const listen = () => {
  const items = document.querySelectorAll(".cvi");
  items.forEach((el) => {
    el.addEventListener("click", (e) => {
      openShare(e.target);
    });
  });
};

window.addEventListener("DOMContentLoaded", () => {
  const options = getOptions();
  const shares = document.querySelectorAll(".cv-share");
  let template = `<div class="cvshr ${options.shape}">`;
  let el, color='';
  Object.keys(icons).forEach((i) => {
    el = icons[i];
    if(options.iconColor != "") {
      color = `style="background: ${options.iconColor};" onmouseover="this.style.background = '${options.onHoverColor}';" onmouseleave="this.style.background = '${options.iconColor}';"`;
    }
    template += `<span class="cvi ${i}" ${color} data-icon="${i}">${el.icon}</span>`;
  });
  template += `</div>`;
  let l1 = shares.length;
  shares.forEach((el, i) => {
    el.innerHTML = template;
    if (i == l1 - 1) {
      listen();
    }
  });
});
