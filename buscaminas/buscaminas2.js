//globals
id_array =[
['_0_0','_0_1','_0_2','_0_3','_0_4'],
['_1_0','_1_1','_1_2','_1_3','_1_4'],
['_2_0','_2_1','_2_2','_2_3','_2_4'],
['_3_0','_3_1','_3_2','_3_3','_3_4']
] 
cp_id_array = []
win = 0
bombs = []
gameOver = 1
score = 0
time = 0
//////////////////////////////////////////////////////
function cpArray(a)
{
    out = [[],[],[],[]]
    for(i = 0; i < a.length; i++ )
        for(j = 0; j < a[i].length; j++ )
            out[i][j] = a[i][j]
    return out
}

function randInt(a = 100)
{
    return parseInt((a+1)*Math.random())
}

function checkTxtBox()
{
    if(!parseInt(document.getElementById('nBombs').value))
        document.getElementById('nBombs').value = 10
    if(!document.getElementById('nBombs').value)
        document.getElementById('nBombs').value = 10
    if(parseInt(document.getElementById('nBombs').value) > 10)
        document.getElementById('nBombs').value = 10
    if(parseInt(document.getElementById('nBombs').value) < 1)
        document.getElementById('nBombs').value = 1
}

function getBombs()
{
    n_bombs = parseInt(document.getElementById('nBombs').value)
    i = 0
    while(i < n_bombs)
    {
        rep=0
        aux = [randInt(3),randInt(4)] //provisional
        if(!i)
            bombs[i++] = aux
        for(j in bombs)
            if(bombs[j][0] == aux[0] && bombs[j][1] == aux[1])
                rep = 1
        if(!rep)
            bombs[i++] = aux
    }
}

function reveal_good()
{
    for(i = 0;i < bombs.length; i++)
    {
        a = bombs[i][0]
        b = bombs[i][1]
        document.getElementById(id_array[a][b]).innerHTML = '<img src="ex_bomb.png"></img>'
    }
}

function reveal_bad()
{
    for(i = 0;i < bombs.length; i++)
    {
        a = bombs[i][0]
        b = bombs[i][1]
        document.getElementById(id_array[a][b]).innerHTML = '<img src="bomb.png"></img>'
    }
}

function __init__()
{
    checkTxtBox()
    gameOver = 1
    score = 0
    time = 0
    bombs = []
    for(i = 0;i < id_array.length; i++)
        for(j = 0;j < id_array[i].length; j++)
            document.getElementById(id_array[i][j]).innerHTML = '<img src="nada.png"></img>'
}

function __initOnPlay__()
{
    __init__()
    gameOver = 0
    getBombs()
    win = 0
    cp_id_array = cpArray(id_array)
    document.getElementById('arr').innerHTML = bombs//quitar
}

function checkBomb(id)
{
    if(!gameOver)
    {
        for(i = 0;i < bombs.length; i++)
        {
            a = bombs[i][0]
            b = bombs[i][1]
            if(id_array[a][b] == id)
            {
                gameOver++
                break
            }
        }
        if(!gameOver)
        {
            sum = i = j = 0
            document.getElementById(id).innerHTML = '<img src="vacio.png"></img>'
            for(i = 0;i < cp_id_array.length; i++)
            {
                for(j = 0;j < cp_id_array[i].length; j++)
                    if(cp_id_array[i][j] == id)
                        break
                if(cp_id_array[i][j] == id)
                        break
            }
            cp_id_array[i].splice(j,1)
            for(i = 0;i < cp_id_array.length; i++)
                sum += cp_id_array[i].length
            if(bombs.length == sum)
                win = ++gameOver
        }
        if(gameOver && !win)
        {
            reveal_bad()
            document.getElementById(id).innerHTML = '<img src="bomb_press.png"></img>'
        }
        if(gameOver && win)
            reveal_good()
    }
}