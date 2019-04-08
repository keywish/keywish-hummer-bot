'use strict';

goog.provide('Blockly.Arduino.hummerbot');

goog.require('Blockly.Arduino');

//����0��ͼ�ο�ת��ΪC���� Hummerbot��ʼ��
Blockly.Arduino.hb_setup = function() {
 Blockly.Arduino.definitions_['define_Arduino'] = '#include<Arduino.h>'; 
 //Blockly.Arduino.definitions_['define_wire'] = '#include<wire.h>'; 
 Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include<SoftwareSerial.h>'; 
 Blockly.Arduino.definitions_['define_ProtocolParser'] = '#include<ProtocolParser.h>'; 
 Blockly.Arduino.definitions_['define_KeyMap'] = '#include<KeyMap.h>'; 
 Blockly.Arduino.definitions_['define_debug'] = '#include<debug.h>'; 
 Blockly.Arduino.definitions_['define_Hummerbot'] = '#include<Hummerbot.h>';
 Blockly.Arduino.definitions_['object'] = 'ProtocolParser *mProtocol = new ProtocolParser();\nHummerbot hbot(mProtocol,HB_INPUT1_PIN, HB_INPUT2_PIN, HB_INPUT3_PIN,HB_INPUT4_PIN);\nbyte Ps2xStatus, Ps2xType;'
 Blockly.Arduino.setups_['setup_hb_setup'] ='\t'+'hbot.init();\n'
                                            +'\t'+'hbot.SetSpeed(0);\n'
											+'\t'+'hbot.SetControlMode((E_SMARTCAR_CONTROL_MODE)(0));\n'
											+'\t'+'Ps2xType = hbot.mPs2x->readType();\n'
 var code = '';
 return code;
};
//����һ��ͼ�ο�ת��ΪC���� С����ʻ��������������û��value�����ٶȣ�����,��value��
Blockly.Arduino.hb_move = function() {
 var dropdown_Direction = this.getFieldValue('Direction');
 var value_Speed = Blockly.Arduino.valueToCode(this,'Speed',Blockly.Arduino.ORDER_ATOMIC);
 var code = 'hbot.SetSpeed('+value_Speed+');\n'
 			+'hbot.Drive('+dropdown_Direction+');\n';
return code;
};
//���ڶ���ͼ�ο�ת��ΪC���� С���ٿ�ģʽ����������û��value��
Blockly.Arduino.hb_mode = function(){
 var dropdown_Mode = this.getFieldValue('Mode');
 Blockly.Arduino.setups_['setup_hb_mode'] ='\t'+'hbot.SetControlMode('+'(E_SMARTCAR_CONTROL_MODE)'+dropdown_Mode+');\n'
 var code = ''
 return code;
};
//��������ͼ�ο�ת��ΪC���� ������ţ����룬��value�������У���Ƕȣ����룬��value��
Blockly.Arduino.hb_servo = function(){
 var value_servo_pin = Blockly.Arduino.valueToCode(this, 'ServoPin', Blockly.Arduino.ORDER_ATOMIC);
 var value_servo_degree = Blockly.Arduino.valueToCode(this, 'ServoDegree', Blockly.Arduino.ORDER_ATOMIC);
	     Blockly.Arduino.setups_['setup_hb_servo'] = '\t'+'hbot.SetServoPin('+value_servo_pin+');\n'
								   +'\t'+'hbot.mUltrasonic->SetServoBaseDegree('+value_servo_degree+');\n'
								   +'\t'+'hbot.mUltrasonic->SetServoDegree(90);\n'
 var code = '';
 return code;
};
//�����ĸ�ͼ�ο�ת��ΪC���� �ĸ�������ţ����룬��value��
Blockly.Arduino.hb_motor = function(){
 var value_LeftNegativeValue = Blockly.Arduino.valueToCode(this,'LeftNegativeValue',Blockly.Arduino.ORDER_ATOMIC);	
 var value_LeftPositiveValue = Blockly.Arduino.valueToCode(this,'LeftPositiveValue',Blockly.Arduino.ORDER_ATOMIC);	
 var value_RightNegativeValue = Blockly.Arduino.valueToCode(this,'RightNegativeValue',Blockly.Arduino.ORDER_ATOMIC);	
 var value_RightPositiveValue = Blockly.Arduino.valueToCode(this,'RightPositiveValue',Blockly.Arduino.ORDER_ATOMIC);	
Blockly.Arduino.setups_['setup_hb_motor'] ='\t'+'hbot.SetMotorPin('
									+value_LeftNegativeValue+','
									+value_LeftPositiveValue+','
									+value_RightNegativeValue+','
									+value_RightPositiveValue+');\n';
 var code = '';
 return code;
};
//�������ͼ�ο�ת��ΪC���� ת��Ƕȣ����룬��value�����ٶȣ����룬��value��
Blockly.Arduino.hb_turn = function(){
 var value_TurnAngle = Blockly.Arduino.valueToCode(this,'TurnAngle',Blockly.Arduino.ORDER_ATOMIC);
 var value_Speed = Blockly.Arduino.valueToCode(this,'Speed',Blockly.Arduino.ORDER_ATOMIC);
 var code = 'hbot.SetSpeed('+value_Speed+');\n'
		  +'hbot.Drive('+value_TurnAngle+');\n';
 return code;
};
//��������ͼ�ο�ת��ΪC���� ����
Blockly.Arduino.hb_speedup = function(){
 var code = 'hbot.SpeedUp(5);\n'
 			+'hbot.Drive();\n';
 return code;
};
//�����߸�ͼ�ο�ת��ΪC���� ����
Blockly.Arduino.hb_speeddown = function(){
 var code = 'hbot.SpeedDown(5);\n'
 			+'hbot.Drive();\n';
 return code;
};
//���ڰ˸�ͼ�ο�ת��ΪC���� ����������ţ����룬��value��
Blockly.Arduino.hb_irReceive = function(){
 var value_IrReceivePin = Blockly.Arduino.valueToCode(this,'IrReceivePin',Blockly.Arduino.ORDER_ATOMIC);
 Blockly.Arduino.setups_['setup_hb_irReceive'] ='\t'+'hbot.SetIrPin('+value_IrReceivePin+');\n'
 var code = '';
 return code;
};
//���ھŸ�ͼ�ο�ת��ΪC���� ����ң�ذ���������������boolean��
Blockly.Arduino.hb_irKeyPress = function(){
 var dropdown_Irkey = this.getFieldValue('Irkey');
 var code = '(E_IR_KEYCODE)hbot.mIrRecv->getIrKey(hbot.mIrRecv->getCode()) == '+dropdown_Irkey+'';
 return [code, Blockly.Arduino.ORDER_ATOMIC]; //��codeΪ���ʽʱ�ô˷��ط�ʽ
};
//����ʮ��ͼ�ο�ת��ΪC���� ������ģ���������ţ����� ��value��
Blockly.Arduino.hb_ultrasonicpin = function(){
 var value_TrigPin = Blockly.Arduino.valueToCode(this,'TrigPin',Blockly.Arduino.ORDER_ATOMIC);
 var value_EchoPin = Blockly.Arduino.valueToCode(this,'EchoPin',Blockly.Arduino.ORDER_ATOMIC);
 Blockly.Arduino.setups_['setup_hb_ultrasonicpin'] ='\t'+'hbot.SetUltrasonicPin('+value_TrigPin+','+value_EchoPin+');\n'
 var code = '';
 return code;
};
//����ʮһ��ͼ�ο�ת��ΪC���� ��������ࣨ������ǰ�����ң�
Blockly.Arduino.hb_readUltrasonicDistance = function(){
 var dropdown_UltrasonicDirection=this.getFieldValue('UltrasonicDirection');
 var code = 'hbot.GetUltrasonicDistance('+dropdown_UltrasonicDirection+')';
 return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};
//����ʮ����ͼ�ο�ת��ΪC���� �������ģ����������(���룬��value)    field��name��ȷ��ʹNUM�����
Blockly.Arduino.hb_irAvoidance = function(){
 var value_LeftPin = Blockly.Arduino.valueToCode(this,'LeftPin',Blockly.Arduino.ORDER_ATOMIC);
 var value_RightPin = Blockly.Arduino.valueToCode(this,'RightPin',Blockly.Arduino.ORDER_ATOMIC);
 Blockly.Arduino.setups_['setup_hb_irAvoidance'] ='\t'+'hbot.SetInfraredAvoidancePin('+value_LeftPin+','+value_RightPin+');\n'
 var code = '';
 return code;
};
//����ʮ����ͼ�ο�ת��ΪC���� ������ϲ�ࣨ���������ң�
Blockly.Arduino.hb_readIrAvoidanceDistance = function(){
 var dropdown_IrAvoidanceDirection = this.getFieldValue('IrAvoidanceDirection');
 var code = 'hbot.GetInfraredAvoidance('+dropdown_IrAvoidanceDirection+')';
 return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};
//����ʮ�ĸ�ͼ�ο�ת��ΪC���� PS2ģ���ĸ�����(���룬��value)
Blockly.Arduino.hb_PS2Pin = function(){
 var value_CLKPin = Blockly.Arduino.valueToCode(this,'CLKPin',Blockly.Arduino.ORDER_ATOMIC); 
 var value_CMDPin = Blockly.Arduino.valueToCode(this,'CMDPin',Blockly.Arduino.ORDER_ATOMIC); 
 var value_ATTPin = Blockly.Arduino.valueToCode(this,'ATTPin',Blockly.Arduino.ORDER_ATOMIC); 
 var value_DATPin = Blockly.Arduino.valueToCode(this,'DATPin',Blockly.Arduino.ORDER_ATOMIC); 
 Blockly.Arduino.setups_['setup_hb_PS2Pin'] ='\t'+'hbot.SetPs2xPin('
									+value_CLKPin+','
									+value_CMDPin+','
									+value_ATTPin+','
									+value_DATPin+');\n'																												
 var code = '';
 return code;
};
//����ʮ���ͼ�ο�ת��ΪC���� ����PS2ҡ����ֵ
Blockly.Arduino.hb_varPS2vibrate = function(){
 var code = 'static int vibrate = 0;\nbyte PSS_X = 0,PSS_Y = 0;\nhbot.mPs2x->read_gamepad(false, vibrate);\n';
 return code;
};
//����ʮ����ͼ�ο�ת��ΪC���� ����PS2ҡ����ֵ
Blockly.Arduino.hb_setPS2vibrate = function(){
 var code = 'vibrate = hbot.mPs2x->Analog(PSAB_CROSS);\n';
 return code;
};
//����ʮ�߸�ͼ�ο�ת��ΪC���� PS2�������£�����boolean��
Blockly.Arduino.hb_PS2KeyPressed = function(){
var code = 'hbot.mPs2x->ButtonDataByte()';
return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};
//����ʮ�˸�ͼ�ο�ת��ΪC���� PS2�������£�������
Blockly.Arduino.hb_WhichPS2KeyPressed = function(){
 var dropdown_PS2Key = this.getFieldValue('PS2Key');
 var code = 'hbot.mPs2x->Button('+dropdown_PS2Key+')';
 return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};
//����ʮ�Ÿ�ͼ�ο�ת��ΪC���� ����ѭ��ģ����������(���룬��value)
Blockly.Arduino.hb_IrTrackingPin = function(){
 var value_IrTrackingLeftPin = Blockly.Arduino.valueToCode(this,'IrTrackingLeftPin',Blockly.Arduino.ORDER_ATOMIC); 
 var value_IrTrackingMidPin = Blockly.Arduino.valueToCode(this,'IrTrackingMidPin',Blockly.Arduino.ORDER_ATOMIC); 
 var value_IrTrackingRightPin = Blockly.Arduino.valueToCode(this,'IrTrackingRightPin',Blockly.Arduino.ORDER_ATOMIC); 
 var code = 'hbot.SetInfraredTracingPin('+value_IrTrackingLeftPin+','+value_IrTrackingMidPin+','+value_IrTrackingRightPin+');\n';
 return code;
};
//���ڶ�ʮ��ͼ�ο�ת��ΪC���� ��ȡѭ��״̬��������
Blockly.Arduino.hb_readTrackingValue = function(){
 var dropdown_TrackingValue = this.getFieldValue('TrackingValue');
 var code = 'hbot.mInfraredTracing->getValue()=='+dropdown_TrackingValue+'';
 return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};
//���ڶ�ʮһ��ͼ�ο�ת��ΪC���� ����һ��������һ��ѭ��״̬�ı���
Blockly.Arduino.hb_setByteOld = function(){
 var code = 'static byte old;';
 return code;
};
//���ڶ�ʮ����ͼ�ο�ת��ΪC���� ��ǰѭ��״̬��������
Blockly.Arduino.hb_recentTrackingValue = function(){
 var dropdown_TrackingValue = this.getFieldValue('TrackingValue');
 var code = 'old=='+dropdown_TrackingValue+'';
 return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};
//���ڶ�ʮ����ͼ�ο�ת��ΪC���� �����һ��ѭ��״̬
Blockly.Arduino.hb_cleanLastTrackingValue = function(){
 var code = 'old=0;';
 return code;
};
//���ڶ�ʮ�ĸ�ͼ�ο�ת��ΪC���� ��ǰѭ��״̬����ȫ��
Blockly.Arduino.hb_recentTrackingValueIsNotWhite = function(){
var code = '(hbot.mInfraredTracing->getValue()==IT_ALL_BLACK)||(hbot.mInfraredTracing->getValue()==IT_RIGHT1)||(hbot.mInfraredTracing->getValue()==IT_RIGHT2)||(hbot.mInfraredTracing->getValue()==IT_LEFT1)||(hbot.mInfraredTracing->getValue()==IT_LEFT2)||(hbot.mInfraredTracing->getValue()==IT_CENTER)'; 
return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};
//���ڶ�ʮ���ͼ�ο�ת��ΪC���� ������һ��ѭ��״̬
Blockly.Arduino.hb_resetLastTrackingValue = function(){
 var dropdown_TrackingValue = this.getFieldValue('TrackingValue');
 var code = 'old='+dropdown_TrackingValue+';';
 return code;
};
//���ڶ�ʮ����ͼ�ο�ת��ΪC���� ������������
Blockly.Arduino.hb_receiveBluetoothData = function(){
 var code = 'mProtocol->RecevData();\n';
 return code;
};
//���ڶ�ʮ�߸�ͼ�ο�ת��ΪC���� ���յ�����������
Blockly.Arduino.hb_receivedBluetoothData = function(){
 var code = 'mProtocol->ParserPackage()';
 return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};
//���ڶ�ʮ�˸�ͼ�ο�ת��ΪC���� �����ٿؼ�����
Blockly.Arduino.hb_bluetoothKeyPressed = function(){
 var dropdown_BluetoothKey = this.getFieldValue('BluetoothKey');
 var code = 'mProtocol->GetBluetoothButton('+dropdown_BluetoothKey+')'
 return [code, Blockly.Arduino.ORDER_ATOMIC]; 
};