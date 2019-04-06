package simple;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;

@RestController
@RequestMapping("test")
public class TestPageAction
{
    @RequestMapping(value="/page",produces = "text/plain;charset=utf-8")
    public String getContext(){
        Map<String,String> map = new HashMap<String, String>();
        map.put("name", "荆天明");
        map.put("age", "16");
        map.put("gender", "男");
        return JSONObject.toJSONString(map);
    }
}
