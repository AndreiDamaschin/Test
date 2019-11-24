var first;
var n = 0;
var second;
var countFirst;
var countSecond;
var letters = [];
var classes = [];
var date = new Date();
var season = date.getMonth();
for (var i = 72; i <= 122; ++i)
    letters.push(String.fromCharCode(i));
var data = '<div> 1. ' + ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"][date.getDay()] + '</div><div> 2. ' + ["Зима", "Весна", "Лето", "Осень"][season / 3 < 1 || season == 12 ? 0 : 6 > season && season >= 3 ? 1 : 9 > season && season >= 6 ? 2 : 3] + '</div><div> 3. <input type = "button" value = "Введите дату своего день рождение в формате дд.мм.гггг !" onclick = show()></div>';
function show()
{
    while(true)
    {
        date = prompt("Введите дату своего день рождение в формате дд.мм.гггг !");
        if(date != null && date.length == 10 && date.split(".").length - 1 == 2 && date[2] == "." && date[5] == ".")
        {
            var year;
            alert("Вам " + ((year = (season >= date.substring(3,5) ? 2019 : 2018) - date.substr(6)) == 1 ? + year + " год !" : + year + " лет !"));
            break;        
        }
    }
}
function Random(count) 
{
    this.assimilate = function(second)
    {
        var fields = Object.keys(this);
        var fieldsSecond = Object.keys(second);
        for (var e = 0; e < fields.length; e++)
            if(letters.includes(fields[e]))
                for (var i = 0; i < fields.length; i++)
                {
                    if(letters.includes(fields[i]))
                    {
                        for (var n = 0; n < fieldsSecond.length; n++)
                        {
                            if(letters.includes(fieldsSecond[n]))
                            {
                                if(fields.includes(fieldsSecond[n]))
                                {
                                    if(fields[i] == fieldsSecond[n])
                                        this[fields[i]].assimilate(second[fieldsSecond[n]]);
                                }
                                else
                                    this[fieldsSecond[n]] = second[fieldsSecond[n]];      
                            }
                        }
                    }
                }
            else
                for (var n = 0; n < fieldsSecond.length; n++)
                    if(letters.includes(fieldsSecond[n]))
                        this[fieldsSecond[n]] = second[fieldsSecond[n]];      
    }
    this.oftenKeys = function()
    {
        console.log('Ключей всего ' + Object.keys(this).length + ' и они очень сильно повторяющиеся ! Прямо вообще ! Особенно 1-й ! Тот Мне особенно понравился !' + Object.keys(this));
    }
    this.random = function()
    {
        var key;
        var keys = [];
        data += '<ul>';
        classes[n++] = this;
        var countOfFields = Math.floor(Math.random() * count);
        for (var i = 0; i < countOfFields; i++)
        {
            Object.keys(this).includes(key = String.fromCharCode(Math.floor(97 + Math.random() * 26))) ? console.error() : this[key] = new Random(Object.keys(this).length - 1); 
            keys.includes(key) ? console.error() : data += '<li>' + (keys[keys.length] = key) + '</li>';
        }
        this.oftenKeys();
        data += '</ul>';
    }
    this.random();
}
data += '<div>4.';
new Random(10);
countFirst = Object.keys(first = classes[Math.floor(Math.random() * classes.length)]);
countSecond = Object.keys(second = classes[Math.floor(Math.random() * classes.length)]);
data += '</div><div>5.<ul><li>First Class</li>';
for (var i = 0; i < countFirst.length; i++)
    if(letters.includes(countFirst[i]))
        data += '<li>' + countFirst[i] + '</li>';
data += '</ul><ul><li>Second Class</li>';
for (var i = 0; i < countSecond.length; i++)
    if(letters.includes(countSecond[i]))
        data += '<li>' + countSecond[i] + '</li>';
first.assimilate(second);
countFirst = Object.keys(first);
data += '</ul><ul><li>Together</li>';
for (var i = 0; i < countFirst.length; i++)
    if(letters.includes(countFirst[i]))
        data += '<li>' + countFirst[i] + '</li>';
data += '</ul></div>'
$('body').html(data);