var clipboard = new ClipboardJS(".btn");

      clipboard.on("success", function (e) {
        e.trigger.textContent = "Copied! 😄";
        setTimeout(() => {
          e.trigger.textContent = e.text;
        }, 1000);
      });