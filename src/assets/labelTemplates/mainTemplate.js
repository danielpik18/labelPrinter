export default function (data) {

	const labelXml = `
    <DieCutLabel Version="8.0" Units="twips">
	<PaperOrientation>Landscape</PaperOrientation>
	<Id>LargeShipping</Id>
	<PaperName>30256 Shipping</PaperName>
	<DrawCommands>
		<RoundRectangle X="0" Y="0" Width="3331" Height="5715" Rx="270" Ry="270" />
	</DrawCommands>
	<ObjectInfo>
		<TextObject>
			<Name>NAME</Name>
			<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
			<BackColor Alpha="0" Red="255" Green="255" Blue="255" />
			<LinkedObjectName></LinkedObjectName>
			<Rotation>Rotation0</Rotation>
			<IsMirrored>False</IsMirrored>
			<IsVariable>False</IsVariable>
			<HorizontalAlignment>Center</HorizontalAlignment>
			<VerticalAlignment>Middle</VerticalAlignment>
			<TextFitMode>ShrinkToFit</TextFitMode>
			<UseFullFontHeight>True</UseFullFontHeight>
			<Verticalized>False</Verticalized>
			<StyledText>
				<Element>
					<String>${data.nombre} ${data.apellido}</String>
					<Attributes>
						<Font Family="Arial" Size="16" Bold="False" Italic="False" Underline="False" Strikeout="False" />
						<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
					</Attributes>
				</Element>
			</StyledText>
		</TextObject>
		<Bounds X="2406" Y="255" Width="2880" Height="495" />
	</ObjectInfo>
	<ObjectInfo>
		<ImageObject>
			<Name>GRAPHIC</Name>
			<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
			<BackColor Alpha="0" Red="255" Green="255" Blue="255" />
			<LinkedObjectName></LinkedObjectName>
			<Rotation>Rotation0</Rotation>
			<IsMirrored>False</IsMirrored>
			<IsVariable>False</IsVariable>
			<Image>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</Image>
			<ScaleMode>Uniform</ScaleMode>
			<BorderWidth>0</BorderWidth>
			<BorderColor Alpha="255" Red="0" Green="0" Blue="0" />
			<HorizontalAlignment>Center</HorizontalAlignment>
			<VerticalAlignment>Center</VerticalAlignment>
		</ImageObject>
		<Bounds X="336" Y="150" Width="1545" Height="1740" />
	</ObjectInfo>
	<ObjectInfo>
		<TextObject>
			<Name>FECHA_NACIMIENTO</Name>
			<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
			<BackColor Alpha="0" Red="255" Green="255" Blue="255" />
			<LinkedObjectName></LinkedObjectName>
			<Rotation>Rotation0</Rotation>
			<IsMirrored>False</IsMirrored>
			<IsVariable>False</IsVariable>
			<HorizontalAlignment>Left</HorizontalAlignment>
			<VerticalAlignment>Top</VerticalAlignment>
			<TextFitMode>ShrinkToFit</TextFitMode>
			<UseFullFontHeight>True</UseFullFontHeight>
			<Verticalized>False</Verticalized>
			<StyledText>
				<Element>
					<String>${data.fechaNacimiento}</String>
					<Attributes>
						<Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False" />
						<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
					</Attributes>
				</Element>
			</StyledText>
		</TextObject>
		<Bounds X="2355" Y="840" Width="2070" Height="270" />
	</ObjectInfo>
	<ObjectInfo>
		<TextObject>
			<Name>TEXT_1</Name>
			<ForeColor Alpha="255" Red="78" Green="78" Blue="78" />
			<BackColor Alpha="0" Red="255" Green="255" Blue="255" />
			<LinkedObjectName></LinkedObjectName>
			<Rotation>Rotation0</Rotation>
			<IsMirrored>False</IsMirrored>
			<IsVariable>False</IsVariable>
			<HorizontalAlignment>Left</HorizontalAlignment>
			<VerticalAlignment>Top</VerticalAlignment>
			<TextFitMode>ShrinkToFit</TextFitMode>
			<UseFullFontHeight>True</UseFullFontHeight>
			<Verticalized>False</Verticalized>
			<StyledText>
				<Element>
					<String>Contacto:</String>
					<Attributes>
						<Font Family="Arial" Size="11" Bold="False" Italic="False" Underline="False" Strikeout="False" />
						<ForeColor Alpha="255" Red="78" Green="78" Blue="78" />
					</Attributes>
				</Element>
			</StyledText>
		</TextObject>
		<Bounds X="2370" Y="1335" Width="1170" Height="300" />
	</ObjectInfo>
	<ObjectInfo>
		<TextObject>
			<Name>CORREO</Name>
			<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
			<BackColor Alpha="0" Red="255" Green="255" Blue="255" />
			<LinkedObjectName></LinkedObjectName>
			<Rotation>Rotation0</Rotation>
			<IsMirrored>False</IsMirrored>
			<IsVariable>False</IsVariable>
			<HorizontalAlignment>Left</HorizontalAlignment>
			<VerticalAlignment>Top</VerticalAlignment>
			<TextFitMode>ShrinkToFit</TextFitMode>
			<UseFullFontHeight>True</UseFullFontHeight>
			<Verticalized>False</Verticalized>
			<StyledText>
				<Element>
					<String>${data.correo}</String>
					<Attributes>
						<Font Family="Arial" Size="10" Bold="False" Italic="False" Underline="False" Strikeout="False" />
						<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
					</Attributes>
				</Element>
			</StyledText>
		</TextObject>
		<Bounds X="2374" Y="2010" Width="2925" Height="255" />
	</ObjectInfo>
	<ObjectInfo>
		<TextObject>
			<Name>NUMERO_TELEFONO</Name>
			<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
			<BackColor Alpha="0" Red="255" Green="255" Blue="255" />
			<LinkedObjectName></LinkedObjectName>
			<Rotation>Rotation0</Rotation>
			<IsMirrored>False</IsMirrored>
			<IsVariable>False</IsVariable>
			<HorizontalAlignment>Left</HorizontalAlignment>
			<VerticalAlignment>Top</VerticalAlignment>
			<TextFitMode>ShrinkToFit</TextFitMode>
			<UseFullFontHeight>True</UseFullFontHeight>
			<Verticalized>False</Verticalized>
			<StyledText>
				<Element>
					<String>${data.numeroTelefono}</String>
					<Attributes>
						<Font Family="Arial" Size="10" Bold="False" Italic="False" Underline="False" Strikeout="False" />
						<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
					</Attributes>
				</Element>
			</StyledText>
		</TextObject>
		<Bounds X="2406" Y="1719" Width="2310" Height="345" />
	</ObjectInfo>
	<ObjectInfo>
		<BarcodeObject>
			<Name>BARCODE</Name>
			<ForeColor Alpha="255" Red="0" Green="0" Blue="0" />
			<BackColor Alpha="0" Red="255" Green="255" Blue="255" />
			<LinkedObjectName></LinkedObjectName>
			<Rotation>Rotation0</Rotation>
			<IsMirrored>False</IsMirrored>
			<IsVariable>True</IsVariable>
			<Text>0000</Text>
			<Type>Code39</Type>
			<Size>Medium</Size>
			<TextPosition>Bottom</TextPosition>
			<TextFont Family="Arial" Size="8" Bold="False" Italic="False" Underline="False" Strikeout="False" />
			<CheckSumFont Family="Arial" Size="8" Bold="False" Italic="False" Underline="False" Strikeout="False" />
			<TextEmbedding>None</TextEmbedding>
			<ECLevel>0</ECLevel>
			<HorizontalAlignment>Center</HorizontalAlignment>
			<QuietZonesPadding Left="0" Top="0" Right="0" Bottom="0" />
		</BarcodeObject>
		<Bounds X="1806" Y="2724" Width="2115" Height="525" />
	</ObjectInfo>
	<ObjectInfo>
		<ShapeObject>
			<Name>SHAPE</Name>
			<ForeColor Alpha="255" Red="192" Green="192" Blue="192" />
			<BackColor Alpha="0" Red="255" Green="255" Blue="255" />
			<LinkedObjectName></LinkedObjectName>
			<Rotation>Rotation0</Rotation>
			<IsMirrored>False</IsMirrored>
			<IsVariable>False</IsVariable>
			<ShapeType>HorizontalLine</ShapeType>
			<LineWidth>15</LineWidth>
			<LineAlignment>Center</LineAlignment>
			<FillColor Alpha="0" Red="255" Green="255" Blue="255" />
		</ShapeObject>
		<Bounds X="2421" Y="1245" Width="2880" Height="15" />
	</ObjectInfo>
</DieCutLabel>
      `;

	return labelXml;
}