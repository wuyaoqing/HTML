var start;
onconnect = function(e)
{
	// ��ȡ��һ��ͨ��port
	var port = e.ports[0];
	port.onmessage = function(event)
	{
		// ��������ȡ������
		var data = JSON.parse(event.data);
		if(!start){
			// ȡ��start����
			start = data.start;
		}
		var result = "";
		search:
		for (var n = start,count = 0 ; count < 10; n++)
		{
			for (var i = 2; i <= Math.sqrt(n); i ++)
			{
				// �������n������Ϊ0����ʼ�ж���һ�����֡�
				if (n % i == 0)
				{
					continue search;
				}
			}
			// �Ѽ��ҵ�������
			result += (n + ",");
			start = n;
			count++; // �ҵ�1��������count��1
		}
		start++;
		// ������Ϣ�����ᴥ��ǰ̨JavaScript�ű���
		// SharedWorker�����port���Ե�onmessage����
		port.postMessage(result);
	}
}