window.onscroll = percent;// ִ�к���
// ҳ��ٷֱ�
function percent() {
    let a = document.documentElement.scrollTop, // ��ȥ�߶�
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // ������ҳ�߶� ��ȥ ���Ӹ߶�
        result = Math.round(a / b * 100), // ����ٷֱ�
        btn = document.querySelector("#go-up"); // ��ȡ��ť

    if (result < 95) { // ����Ķ�����С��95% ����ʾ�ٷֱ�
        btn.childNodes[0].style.display = 'none'
        btn.childNodes[1].style.display = 'block'
        btn.childNodes[1].innerHTML = result + '<span>%</span>';
    } else { // �������95%����ʾ�ص�����ͼ��
        btn.childNodes[1].style.display = 'none'
        btn.childNodes[0].style.display = 'block'
    }
}