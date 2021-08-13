const leftBtn = document.querySelectorAll('.prev-btn')[0];
const rightBtn = document.querySelectorAll('.next-btn')[0];
const surpriseBtn = document.querySelector('.random-btn');
const moonBtn = document.getElementById('moon-btn');
let personsIdx = 1;

const renderHook = document.getElementById('test-div');


// local reviews data
const smartQuotes = [
  'A Stoic is someone who transforms fear into prudence, pain into transformation, mistakes into initiation, and desire into undertaking.',
  'Charm is the ability to insult people without offending them; nerdiness the reverse',
  'Difficulty is what wakes up the genius.',
  'Half of the people lie with their lips; the other half with their tears.',
  'Heroes are heroes because they are heroic in behavior, not because they won or lost.',
  "I've never met a rich nitpicker",
];
const dumbQuotes = [
  'Airplanes are interesting toys, but they have no military value.',
  'China is a big country, inhabited by many Chinese.',
  'Do not bother to sell your gas shares. The electric light has no future.',
  'Everything that can be invented has been invented.',
  'Families is where our nation finds hope, where wings take dream',
  "General…I can't name the general.",
];

const persons = [
  {
    id: 1,
    name: 'Jambroni',
    job: 'Chief Beef Officer',
    img: 'https://m.media-amazon.com/images/I/41bt2nub+3L._AC_.jpg',
    iq: 9001,
  },
  {
    id: 2,
    name: 'CKQT_XoXo',
    job: 'Senior Song Person',
    img: 'https://static.wikia.nocookie.net/muc/images/7/7f/Jimmy_Timmy.jpg/revision/latest?cb=20130716094737',
    iq: 69,
  },
  {
    id: 3,
    name: 'Professor Hank',
    job: 'Illich Acolyte',
    img: 'https://m.media-amazon.com/images/I/41a+9E6qtNL._AC_SS450_.jpg',
    iq: 130,
  },
  {
    id: 4,
    name: 'Fryin Ry',
    job: 'Air Trafficker',
    img: 'https://static.wikia.nocookie.net/edwikia/images/6/64/Rolf_transparent.png/revision/latest/scale-to-width/360?cb=20171030001040',
    iq: 120,
  },
  {
    id: 5,
    name: 'The Great Brandini',
    job: 'Unpaid Intern',
    img: 'https://static.wikia.nocookie.net/edfanon/images/d/dd/Edd.jpg/revision/latest?cb=20141201012822',
    iq: 100,
  },
];

function moonHandler() {
    
  if (personItem.iq >= 120) {
   
    // const renderHook = document.getElementById('test-div');
    renderHook.innerHTML = `
    <p>CypherPunk-Esque. Not Moonboi.</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/WdrSP0V-KLg" frameborder="0" allowfullscreen></iframe>`
  } else if (personItem.iq < 90) {
    // const renderHook = document.getElementById('test-div');
    renderHook.innerHTML = `
    <p>NUMBER GO UP! TOOO THE MOOOOOON! I buy.</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/IIaa9kZylW8" frameborder="0" allowfullscreen></iframe>`
  } else {
    // const renderHook = document.getElementById('test-div');
    renderHook.innerHTML = `
    <p>IYI Soviet Harvard No-coin</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/s3NWyh8a5t0" frameborder="0" allowfullscreen></iframe>`
  }
}

function pageRender() {
  //find the item based on the ID
  personItem = persons.find((x) => x.id === personsIdx);

  img = document.querySelector('.img-container').firstElementChild;
  author = document.getElementById('author');
  job = document.getElementById('job');
  info = document.getElementById('info');

  img.src = personItem.img;
  author.textContent = personItem.name;
  job.textContent = personItem.job;

  if (personItem.iq >= 120) {
    let smartIdx = Math.ceil(Math.random() * smartQuotes.length) - 1;
    info.textContent = smartQuotes[smartIdx];
  } else if (personItem.iq < 90) {
    let dumbIdx = Math.ceil(Math.random() * dumbQuotes.length) - 1;
    info.textContent = dumbQuotes[dumbIdx];
  } else {
    info.textContent =
      'Too dumb to be smart. Too smart to be dumb. Therefore no coin for you.';
  }
  // Hacky way to close out the "am i moonboy video"
  renderHook.innerHTML = ``
}

function leftBtnHandler() {
  if (personsIdx === 1) {
    personsIdx = persons.length;
  } else personsIdx--;
  pageRender();
}

function rightBtnHandler() {
  if (personsIdx === persons.length) {
    personsIdx = 1;
  } else {
    personsIdx++;
  }
  pageRender();
}

function surpriseBtnHandler() {
  let randomArray = [];
  for (obj of persons) {
    randomArray.push(obj.id);
  }
  personsIdx = Math.ceil(Math.random() * randomArray.length);
  pageRender();
}

leftBtn.addEventListener('click', leftBtnHandler);
rightBtn.addEventListener('click', rightBtnHandler);
surpriseBtn.addEventListener('click', surpriseBtnHandler);
moonBtn.addEventListener('click', moonHandler);

//initialize page
pageRender();
