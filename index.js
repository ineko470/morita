document.addEventListener("DOMContentLoaded", function () {
  const tags = document.querySelectorAll(".tag");
  const contents = document.querySelectorAll(".container3");

  document.getElementById("cnt1").classList.add("active");
  document.querySelector(".tag1").classList.add("active");

  tags.forEach(tag => {
    tag.addEventListener("click", function () {
      tags.forEach(t => t.classList.remove("active"));

      contents.forEach(content => content.classList.remove("active"));

      const targetId = this.getAttribute("data-target");
      document.getElementById(targetId).classList.add("active");
      this.classList.add("active");
    });
  });
});
//--------------------------
document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".container4_2 .mini");

  const mainImage = document.querySelector(".container4_1 img");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      mainImage.src = this.src;
    });
  });
});

//--------------------------
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
//--------------DIY-------------
// �T���l�C�����N���b�N �� �I�[�o�[���C�\��
const thumbs = document.querySelectorAll('.thumb');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');

thumbs.forEach(img => {
  img.addEventListener('click', () => {
    overlay.style.display = 'flex';
    overlayImg.src = img.src; // �����摜���g��\��
  });
});

// �I�[�o�[���C���N���b�N �� ����
overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  overlayImg.src = "";
});

