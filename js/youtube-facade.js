(function () {
  function activate(embed) {
    var id = embed.getAttribute('data-youtube-id');
    if (!id || embed.querySelector('iframe')) return;

    var title = embed.getAttribute('data-youtube-title') || 'YouTube video';
    var iframe = document.createElement('iframe');
    iframe.src =
      'https://www.youtube.com/embed/' +
      encodeURIComponent(id) +
      '?autoplay=1&playsinline=1&rel=0';
    iframe.title = title;
    iframe.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    embed.replaceChildren(iframe);
  }

  document.querySelectorAll('.video-embed[data-youtube-id]').forEach(function (embed) {
    var facade = embed.querySelector('.video-facade');
    if (!facade) return;

    facade.addEventListener('click', function (event) {
      event.preventDefault();
      activate(embed);
    });
  });
})();
