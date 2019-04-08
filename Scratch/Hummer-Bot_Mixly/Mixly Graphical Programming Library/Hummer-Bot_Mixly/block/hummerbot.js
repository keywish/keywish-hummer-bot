'use strict';

goog.provide('Blockly.Blocks.hummerbot');

goog.require('Blockly.Blocks');


Blockly.Blocks.hummerbot.HUE = 300;


var HUMMERBOT_DIRECTION=[[Blockly.HUMMERBOT_DIRECTION_FORWARD, "90"],[Blockly.HUMMERBOT_DIRECTION_BACK, "270"],[Blockly.HUMMERBOT_DIRECTION_STOP,"90"],[Blockly.HUMMERBOT_DIRECTION_TURNLEFT, "180"],[Blockly.HUMMERBOT_DIRECTION_TURNRIGHT, "0"]];
var HUMMERBOT_CONTROLMODE=[[Blockly.HUMMERBOT_CONTROLMODE_BLUETOOTH,"0"],[Blockly.HUMMERBOT_CONTROLMODE_REMOTE,"1"],[Blockly.HUMMERBOT_CONTROLMODE_IRTRACKING,"2"],[Blockly.HUMMERBOT_CONTROLMODE_IRAVOIDANCE,"3"],[Blockly.HUMMERBOT_CONTROLMODE_ULTRASONICAVOIDANCE,"4"],[Blockly.HUMMERBOT_CONTROLMODE_PS2,"5"],[Blockly.HUMMERBOT_CONTROLMODE_NRF24L01,"6"],[Blockly.HUMMERBOT_CONTROLMODE_ULTRASONICIRAVOIDANCE,"7"]];
var HUMMERBOT_IRKEY=[["1","0"],["2","1"],["3","2"],["4","3"],["5","4"],["6","5"],["7","6"],["8","7"],["9","8"],["0","9"],["*","10"],["#","11"],[Blockly.HUMMERBOT_IRKEY_UP,"12"],[Blockly.HUMMERBOT_IRKEY_DOWN,"13"],["OK","14"],[Blockly.HUMMERBOT_IRKEY_LEFT,"15"],[Blockly.HUMMERBOT_IRKEY_RIGHT,"16"]];
var HUMMERBOT_ULTRASONICDIRECTION=[[Blockly.HUMMERBOT_ULTRASONICDIRECTION_FRONT,"0"],[Blockly.HUMMERBOT_ULTRASONICDIRECTION_LEFT,"1"],[Blockly.HUMMERBOT_ULTRASONICDIRECTION_RIGHT,"2"]];
var HUMMERBOT_IRAVOIDANCEDIRECTION=[[Blockly.HUMMERBOT_IRAVOIDANCEDIRECTION_LEFT,"0"],[Blockly.HUMMERBOT_IRAVOIDANCEDIRECTION_RIGHT,"1"]]; 
var HUMMERBOT_PS2KEY=[[Blockly.HUMMERBOT_PS2KEY_UP,"0x0010"],[Blockly.HUMMERBOT_PS2KEY_DOWN,"0x0040"],[Blockly.HUMMERBOT_PS2KEY_LEFT,"0x0080"],[Blockly.HUMMERBOT_PS2KEY_RIGHT,"0x0020"],["×","0x4000"],["○","0x2000"],["△","0x1000"],["□","0x8000"]];
var HUMMERBOT_TRACKINGVALUE=[[Blockly.HUMMERBOT_TRACKINGVALUE_BLACK,"0"],[Blockly.HUMMERBOT_TRACKINGVALUE_WHITE,"7"],[Blockly.HUMMERBOT_TRACKINGVALUE_CENTER,"5"],[Blockly.HUMMERBOT_TRACKINGVALUE_RIGHT1,"6"],[Blockly.HUMMERBOT_TRACKINGVALUE_RIGHT2,"4"],[Blockly.HUMMERBOT_TRACKINGVALUE_LEFT1,"3"],[Blockly.HUMMERBOT_TRACKINGVALUE_LEFT2,"1"]];
var HUMMERBOT_BLUETOOTHKEY=[[Blockly.HUMMERBOT_BLUETOOTHKEY_UP,"0"],[Blockly.HUMMERBOT_BLUETOOTHKEY_DOWN,"1"],[Blockly.HUMMERBOT_BLUETOOTHKEY_LEFT,"2"],[Blockly.HUMMERBOT_BLUETOOTHKEY_RIGHT,"3"],[Blockly.HUMMERBOT_BLUETOOTHKEY_SPEEDUP,"4"],[Blockly.HUMMERBOT_BLUETOOTHKEY_SPEEDDOWN,"5"]];

//第0个图形块的样式,Hummerbot初始化
Blockly.Blocks.hb_setup = {
 init:function(){
	this.setColour(Blockly.Blocks.hummerbot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.HUMMERBOT_SETUP)
	    .appendField(new Blockly.FieldImage("../../media/hummerbot/hb_hummerbot.jpg", 39, 32))
	this.setPreviousStatement(false,null);
    this.setNextStatement(true,null);   
	this.setTooltip('');
 }
};

//第一个图形块的样式,小车行驶方向下拉（下拉没有value），速度（输入,有value）
Blockly.Blocks.hb_move = {
  init: function() {
	    this.setColour(Blockly.Blocks.hummerbot.HUE);
        this.appendDummyInput("")
        .appendField(Blockly.HUMMERBOT_MOVE)
		.appendField(new Blockly.FieldImage("../../media/hummerbot/hb_hummerbot.jpg", 39, 32))
        .appendField(new Blockly.FieldDropdown(HUMMERBOT_DIRECTION), "Direction")
        .appendField(Blockly.HUMMERBOT_SPEED);
	    this.appendValueInput("Speed", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
	    this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
        this.setTooltip('');
  }
};
//第二个图形块的样式,小车操控模式下拉（下拉没有value）
Blockly.Blocks.hb_mode = {
	init:function(){
	    this.setColour(Blockly.Blocks.hummerbot.HUE);
		this.appendDummyInput("")
			.appendField(Blockly.HUMMERBOT_MODE)
		    .appendField(new Blockly.FieldImage("../../media/hummerbot/hb_hummerbot.jpg", 39, 32))
			.appendField(new Blockly.FieldDropdown(HUMMERBOT_CONTROLMODE),"Mode")
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setTooltip('');
		}
};
//第三个图形块的样式,舵机引脚（输入，有value），舵机校正角度（输入，有value）
Blockly.Blocks.hb_servo = {
  init: function() {
    this.setColour(Blockly.Blocks.hummerbot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.HUMMERBOT_SERVO)
		.appendField(new Blockly.FieldImage("../../media/hummerbot/hb_servo.jpg", 39, 32))
    this.appendValueInput("ServoPin", Number)
        .appendField(Blockly.HUMMERBOT_SERVOPIN)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("ServoDegree", Number)
        .appendField(Blockly.HUMMERBOT_SERVODEGREE)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};
//第四个图形块的样式,四个电机引脚（输入，有value）
Blockly.Blocks.hb_motor = {
  init: function() {
    this.setColour(Blockly.Blocks.hummerbot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.HUMMERBOT_MOTORPIN)
		.appendField(new Blockly.FieldImage("../../media/hummerbot/hb_motor.jpg", 39, 32))
    this.appendValueInput("LeftNegativeValue", Number)
        .appendField(Blockly.HUMMERBOT_LEFTNEGATIVEPIN)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("LeftPositiveValue", Number)
        .appendField(Blockly.HUMMERBOT_LEFTPOSITIVEPIN)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
	this.appendValueInput("RightNegativeValue", Number)
        .appendField(Blockly.HUMMERBOT_RIGHTNEGATIVEPIN)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("RightPositiveValue", Number)
        .appendField(Blockly.HUMMERBOT_RIGHTPOSITIVEPIN)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};
//第五个图形块的样式,转弯角度（输入，有value），速度（输入，有value）
Blockly.Blocks.hb_turn = {
  init: function() {
    this.setColour(Blockly.Blocks.hummerbot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.HUMMERBOT_TURN)
		.appendField(new Blockly.FieldImage("../../media/hummerbot/hb_hummerbot.jpg", 39, 32))
    this.appendValueInput("TurnAngle", Number)
        .appendField(Blockly.HUMMERBOT_TURNANGLE)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("Speed", Number)
        .appendField(Blockly.HUMMERBOT_SPEED)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};
//第六个图形块的样式,加速
Blockly.Blocks.hb_speedup = {
 init:function(){
	 this.setColour(Blockly.Blocks.hummerbot.HUE);
	 this.appendDummyInput("")        
		 .appendField(new Blockly.FieldImage("../../media/hummerbot/hb_hummerbot.jpg", 39, 32))
		 .appendField(Blockly.HUMMERBOT_SPEEDUP)
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
 }
};
//第七个图形块的样式,加速
Blockly.Blocks.hb_speeddown = {
 init:function(){
	 this.setColour(Blockly.Blocks.hummerbot.HUE);
	 this.appendDummyInput("")        
		 .appendField(new Blockly.FieldImage("../../media/hummerbot/hb_hummerbot.jpg", 39, 32))
		 .appendField(Blockly.HUMMERBOT_SPEEDDOWN)
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
 }
};
//第八个图形块的样式 红外接收引脚（输入，有value）
Blockly.Blocks.hb_irReceive = {
  init: function() {
    this.setColour(Blockly.Blocks.hummerbot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.HUMMERBOT_IRRECEIVEPIN)
		.appendField(new Blockly.FieldImage("../../media/hummerbot/hb_irreceive.jpg", 39, 32))
    this.appendValueInput("IrReceivePin", Number)        
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};
//第九个图形块的样式 红外遥控按键（下拉，返回boolean）
Blockly.Blocks.hb_irKeyPress = {
  init: function() {
    this.setColour(Blockly.Blocks.hummerbot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.HUMMERBOT_IRKEYPRESS)
		.appendField(new Blockly.FieldImage("../../media/hummerbot/hb_irremote.jpg", 39, 32))
		.appendField(new Blockly.FieldDropdown(HUMMERBOT_IRKEY), "Irkey")
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};
//第十个图形块的样式 超声波模块两个引脚（输入 有value）
Blockly.Blocks.hb_ultrasonicpin = {
  init: function() {
    this.setColour(Blockly.Blocks.hummerbot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.HUMMERBOT_ULTRASONICPIN)
		.appendField(new Blockly.FieldImage("../../media/hummerbot/hb_ultrasonic.jpg", 39, 32))
    this.appendValueInput("TrigPin", Number)
        .appendField(Blockly.HUMMERBOT_TRIGPIN)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("EchoPin", Number)
        .appendField(Blockly.HUMMERBOT_ECHOPIN)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};
//第十一个图形块的样式(setOutput) 超声波测距（下拉，前，左，右）
Blockly.Blocks.hb_readUltrasonicDistance = {
  init: function() {
    this.setColour(Blockly.Blocks.hummerbot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.HUMMERBOT_READULTRASONICDISTANCE)
		.appendField(new Blockly.FieldImage("../../media/hummerbot/hb_ultrasonic.jpg", 39, 32))
		.appendField(new Blockly.FieldDropdown(HUMMERBOT_ULTRASONICDIRECTION), "UltrasonicDirection")
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};
//第十二个图形块的样式 红外避障模块两个引脚(输入，有value)    field的name不确定使NUM待检测
Blockly.Blocks.hb_irAvoidance = {
  init: function() {
    this.setColour(Blockly.Blocks.hummerbot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.HUMMERBOT_IRAVOIDANCEPIN)
		.appendField(new Blockly.FieldImage("../../media/hummerbot/hb_iravoidance.jpg", 39, 32))
    this.appendValueInput("LeftPin", Number)
        .appendField(Blockly.HUMMERBOT_LEFTPIN)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("RightPin", Number)
        .appendField(Blockly.HUMMERBOT_RIGHTPIN)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};
//第十三个图形块的样式 红外避障测距（下拉，左，右）
Blockly.Blocks.hb_readIrAvoidanceDistance = {
  init: function() {
    this.setColour(Blockly.Blocks.hummerbot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.HUMMERBOT_READIRAVOIDANCEDISTANCE)
		.appendField(new Blockly.FieldImage("../../media/hummerbot/hb_iravoidance.jpg", 39, 32))
		.appendField(new Blockly.FieldDropdown(HUMMERBOT_IRAVOIDANCEDIRECTION), "IrAvoidanceDirection")
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};
//第十四个图形块的样式 PS2模块四个引脚(输入，有value)
Blockly.Blocks.hb_PS2Pin = {
  init: function() {
    this.setColour(Blockly.Blocks.hummerbot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.HUMMERBOT_PS2PIN)
		.appendField(new Blockly.FieldImage("../../media/hummerbot/hb_ps2.jpg", 39, 32))
    this.appendValueInput("CLKPin", Number)
        .appendField(Blockly.HUMMERBOT_CLKPIN)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("CMDPin", Number)
        .appendField(Blockly.HUMMERBOT_CMDPIN)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
	this.appendValueInput("ATTPin", Number)
        .appendField(Blockly.HUMMERBOT_ATTPIN)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("DATPin", Number)
        .appendField(Blockly.HUMMERBOT_DATPIN)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
}; 
//第十五个图形块的样式 定义PS2摇杆震动值
Blockly.Blocks.hb_varPS2vibrate = {
 init:function(){
	this.setColour(Blockly.Blocks.hummerbot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.HUMMERBOT_VARPS2VIBRATE)
	    .appendField(new Blockly.FieldImage("../../media/hummerbot/hb_ps2.jpg", 39, 32))
	this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);   
	this.setTooltip('');
 }
};
//第十六个图形块的样式 设置PS2摇杆震动值
Blockly.Blocks.hb_setPS2vibrate = {
 init:function(){
	this.setColour(Blockly.Blocks.hummerbot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.HUMMERBOT_SETPS2VIBRATE)
	    .appendField(new Blockly.FieldImage("../../media/hummerbot/hb_ps2.jpg", 39, 32))
	this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);   
	this.setTooltip('');
 }
};
//第十七个图形块的样式 PS2键被按下（返回boolean）
Blockly.Blocks.hb_PS2KeyPressed = {
  init:function(){
	this.setColour(Blockly.Blocks.hummerbot.HUE);  
	this.appendDummyInput("")
	    .appendField(Blockly.HUMMERBOT_PS2KEYPRESSED)
	    .appendField(new Blockly.FieldImage("../../media/hummerbot/hb_ps2.jpg", 39, 32))
	this.setOutput(true, Boolean);
	this.setTooltip('');
  }
};
//第十八个图形块的样式 PS2键被按下（下拉）
Blockly.Blocks.hb_WhichPS2KeyPressed = {
  init:function(){
	this.setColour(Blockly.Blocks.hummerbot.HUE);  
	this.appendDummyInput("")
	    .appendField(Blockly.HUMMERBOT_WHICHPS2KEYPRESSED)
	    .appendField(new Blockly.FieldImage("../../media/hummerbot/hb_ps2.jpg", 39, 32))
	    .appendField(new Blockly.FieldDropdown(HUMMERBOT_PS2KEY), "PS2Key")
	this.setOutput(true, Boolean);
	this.setTooltip('');
  }
};
//第十九个图形块的样式 红外循迹模块三个引脚(输入，有value)
Blockly.Blocks.hb_IrTrackingPin = {
  init: function() {
    this.setColour(Blockly.Blocks.hummerbot.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.HUMMERBOT_IRTRACKINGPIN)
		.appendField(new Blockly.FieldImage("../../media/hummerbot/hb_irtracking.png", 39, 32))
    this.appendValueInput("IrTrackingLeftPin", Number)
        .appendField(Blockly.HUMMERBOT_IRTRACKINGLEFTPIN)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("IrTrackingMidPin", Number)
        .appendField(Blockly.HUMMERBOT_IRTRACKINGMIDPIN)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
	this.appendValueInput("IrTrackingRightPin", Number)
        .appendField(Blockly.HUMMERBOT_IRTRACKINGRIGHTPIN)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};
//第二十个图形块的样式 读取循迹状态（下拉）
Blockly.Blocks.hb_readTrackingValue = {
  init:function(){
	this.setColour(Blockly.Blocks.hummerbot.HUE);  
	this.appendDummyInput("")
	    .appendField(Blockly.HUMMERBOT_READTRACKINGVALUE)
	    .appendField(new Blockly.FieldImage("../../media/hummerbot/hb_irtracking.png", 39, 32))
	    .appendField(new Blockly.FieldDropdown(HUMMERBOT_TRACKINGVALUE), "TrackingValue")
	this.setOutput(true, Boolean);
	this.setTooltip('');
  }
};
//第二十一个图形块的样式 定义一个保存上一次循迹状态的变量
Blockly.Blocks.hb_setByteOld = {
 init:function(){
	this.setColour(Blockly.Blocks.hummerbot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.HUMMERBOT_SETBYTEOLD)
	    .appendField(new Blockly.FieldImage("../../media/hummerbot/hb_irtracking.png", 39, 32))
	this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);   
	this.setTooltip('');
 }
};
//第二十二个图形块的样式 当前循迹状态（下拉）
Blockly.Blocks.hb_recentTrackingValue = {
  init:function(){
	this.setColour(Blockly.Blocks.hummerbot.HUE);  
	this.appendDummyInput("")
	    .appendField(Blockly.HUMMERBOT_RECENTTRACKINGVALUE)
	    .appendField(new Blockly.FieldImage("../../media/hummerbot/hb_irtracking.png", 39, 32))
	    .appendField(new Blockly.FieldDropdown(HUMMERBOT_TRACKINGVALUE), "TrackingValue")
	this.setOutput(true, Boolean);
	this.setTooltip('');
  }
};
//第二十三个图形块的样式 清除上一次循迹状态
Blockly.Blocks.hb_cleanLastTrackingValue = {
 init:function(){
	this.setColour(Blockly.Blocks.hummerbot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.HUMMERBOT_CLEANLASTTRACKINGVALUE)
	    .appendField(new Blockly.FieldImage("../../media/hummerbot/hb_irtracking.png", 39, 32))
	this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);   
	this.setTooltip('');
 }
};
//第二十四个图形块的样式 当前循迹状态不是全白
Blockly.Blocks.hb_recentTrackingValueIsNotWhite = {
 init:function(){
	this.setColour(Blockly.Blocks.hummerbot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.HUMMERBOT_RECENTTRACKINGVALUEISNOTWHITE)
	    .appendField(new Blockly.FieldImage("../../media/hummerbot/hb_irtracking.png", 39, 32))
	this.setOutput(true,Boolean);  
	this.setTooltip('');
 }
};
//第二十五个图形块的样式 重置上一次循迹状态
Blockly.Blocks.hb_resetLastTrackingValue = {
 init:function(){
	this.setColour(Blockly.Blocks.hummerbot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.HUMMERBOT_RESETLASTTRACKINGVALUE)
	    .appendField(new Blockly.FieldImage("../../media/hummerbot/hb_irtracking.png", 39, 32))
		.appendField(new Blockly.FieldDropdown(HUMMERBOT_TRACKINGVALUE), "TrackingValue")
	this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);   
	this.setTooltip('');
 }
};
//第二十六个图形块的样式 接收蓝牙数据
Blockly.Blocks.hb_receiveBluetoothData = {
 init:function(){
	this.setColour(Blockly.Blocks.hummerbot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.HUMMERBOT_RECEIVEBLUETOOTHDATA)
	    .appendField(new Blockly.FieldImage("../../media/hummerbot/hb_bluetooth.jpg", 39, 32))
	this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);   
	this.setTooltip('');
 }
};
//第二十七个图形块的样式 接收到了蓝牙数据
Blockly.Blocks.hb_receivedBluetoothData = {
 init:function(){
	this.setColour(Blockly.Blocks.hummerbot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.HUMMERBOT_RECEIVEDBLUETOOTHDATA)
	    .appendField(new Blockly.FieldImage("../../media/hummerbot/hb_bluetooth.jpg", 39, 32))
	this.setOutput(true,Boolean);  
	this.setTooltip('');
 }
};
//第二十八个图形块的样式 蓝牙操控键按下（下拉）
Blockly.Blocks.hb_bluetoothKeyPressed = {
 init:function(){
	this.setColour(Blockly.Blocks.hummerbot.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.HUMMERBOT_BLUETOOTHKEYPRESSED)
	    .appendField(new Blockly.FieldImage("../../media/hummerbot/hb_bluetooth.jpg", 39, 32))
		.appendField(new Blockly.FieldDropdown(HUMMERBOT_BLUETOOTHKEY), "BluetoothKey")
	this.setOutput(true,Boolean);  
	this.setTooltip('');
 }
};