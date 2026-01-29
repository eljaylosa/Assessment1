    // Some js functions to handle front-end 

    // Modal Functions
    const openBtn = document.getElementById("openProjects");
    const closeBtn = document.getElementById("closeProjects");
    const modal = document.getElementById("projectsModal");
  
    openBtn.addEventListener("click", () => {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    });
  
    // close when clicking outside
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });

    // toggle menu for mobile
    function toggleMenu() {
      var menu = document.getElementById("menu");
      if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
    }

    // toggle Music
    // const music = document.getElementById("music-menu");
    // function toggleMusic() { 
    //   if (music.style.display === "block") {
    //     music.style.display = "none";
    //   } else {
    //     music.style.display = "block";
    //   }
    // }
   
    // helper function to toggle spinning
    function updateIconAnimation() {
      if (!audio.paused && audio.currentTime > 0) {
        musicIcon.classList.add("playing");
      } else {
        musicIcon.classList.remove("playing");
      }
    }


    // music functions
    const audio = document.getElementById("audio");
    const progress = document.getElementById("progress");
    const musicMenu = document.getElementById("music-menu");
    const musicIcon = document.getElementById("music-icon");
    const musicWrapper = document.getElementById("music");
    const currentTimeEl = document.getElementById("current-time");
    const durationEl = document.getElementById("duration");
    const volumeSlider = document.getElementById("volume");

    let currentTrack = "";

    // toggle menu
    musicIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      musicMenu.style.display =
        musicMenu.style.display === "block" ? "none" : "block";
    });

    // select musicC
    function selectMusic(src, el) {
      audio.src = src;
      audio.play();

      document
        .querySelectorAll(".playlist li")
        .forEach(li => li.classList.remove("active"));

      el.classList.add("active");

      updateIconAnimation();
    }

    // controls
    function playMusic() {
      audio.play();
      updateIconAnimation();
    }

    function pauseMusic() {
      audio.pause();
      updateIconAnimation();
    }

    function stopMusic() {
      audio.pause();
      audio.currentTime = 0;
      updateIconAnimation();
    }

    // volume
    volumeSlider.addEventListener("input", () => {
      audio.volume = volumeSlider.value;
    });

    // update slider and timeline
    audio.addEventListener("timeupdate", () => {
      if (!isNaN(audio.duration)) {
        progress.max = audio.duration;
        progress.value = audio.currentTime;
        currentTimeEl.textContent = formatTime(audio.currentTime);
        durationEl.textContent = formatTime(audio.duration);
      }
      updateIconAnimation();
    });

    // seek
    progress.addEventListener("input", () => {
      audio.currentTime = progress.value;
    });

    // format time
    function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs < 10 ? "0" + secs : secs}`;
    }

    // rotation icon
    function updateIconAnimation() {
      if (!audio.paused && audio.currentTime > 0) {
        musicIcon.classList.add("playing");
      } else {
        musicIcon.classList.remove("playing");
      }
    }

    // click outside to close
    document.addEventListener("click", (e) => {
      if (!musicWrapper.contains(e.target)) {
        musicMenu.style.display = "none";
      }
    });


    // send message to my email
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      };
      try {
        const response = await fetch("http://localhost:3000/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
      
        const data = await response.json();
        alert(data.message);
        form.reset();
      } catch (error) {
        console.error(error);
        alert("Failed to send message. Please try again later.");
      }
    });

    // lantern hover animation
    document.querySelectorAll(".lantern").forEach(lantern => {
      lantern.addEventListener("mousemove", e => {
        const rect = lantern.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const deltaX = e.clientX - centerX;
  
        const rotate = Math.max(-15, Math.min(15, deltaX * 0.4));
        lantern.style.transform = `rotate(${rotate}deg)`;
        lantern.style.animationPlayState = "paused";
      });
  
      lantern.addEventListener("mouseleave", () => {
        lantern.style.transform = "";
        lantern.style.animationPlayState = "running";
      });
    });
    
    // Open themes function
    const shoeThemes = document.getElementById("showThemes");

    shoeThemes.addEventListener("click", () => {
      const themes = document.getElementById("themes");
      themes.style.display = themes.style.display === "block" ? "none" : "block";
    });

    // Change Theme Function

    // toggle  themes func
    const themes = ["default-theme", "dark-theme", "cute-theme"];

    function applyTheme(theme) {
      document.body.classList.remove(...themes);
      document.body.classList.add(theme);

      document
        .querySelectorAll(".main-content, .my-skills, .skill-cards-border")
        .forEach(el => {
          el.classList.remove(...themes);
          el.classList.add(theme);
        });
    }

    document.getElementById("default-theme").onclick = () => applyTheme("default-theme");
    document.getElementById("dark-theme").onclick = () => applyTheme("dark-theme");
    document.getElementById("cute-theme").onclick = () => applyTheme("cute-theme");



  


    